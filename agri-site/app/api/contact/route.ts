import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Redis } from '@upstash/redis';

const resend = new Resend(process.env.RESEND_API_KEY);
const redis = Redis.fromEnv();

const MAX_REQUESTS = 3; // 3 requests per hour
const TIME_WINDOW = 60 * 60; // 1 hour in seconds

async function checkRateLimit(ip: string): Promise<boolean> {
  const key = `rate-limit:${ip}`;

  try {
    // Increment the counter
    const requests = await redis.incr(key);

    // Set expiration on first request
    if (requests === 1) {
      await redis.expire(key, TIME_WINDOW);
    }

    // Check if limit exceeded
    return requests <= MAX_REQUESTS;
  } catch (error) {
    console.error('Rate limit check failed:', error);
    // On error, allow the request (fail open)
    return true;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, phone, country, company, companyProfile, message, productName, productSlug } = body;

    // Validation - Required fields
    if (!name || !email || !phone || !country || !companyProfile) {
      return NextResponse.json(
        { error: 'Name, email, phone, country, and company profile are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Phone validation (required, must be valid)
    if (phone.length < 8 || phone.length > 20) {
      return NextResponse.json(
        { error: 'Invalid phone number.' },
        { status: 400 }
      );
    }

    // Message validation (optional, but if provided must be reasonable)
    if (message && message.length > 500) {
      return NextResponse.json(
        { error: 'Message must be less than 500 characters.' },
        { status: 400 }
      );
    }

    // ✅ NOW check rate limit (AFTER validation passes)
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const rateLimitOk = await checkRateLimit(ip);

    if (!rateLimitOk) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in an hour.' },
        { status: 429 }
      );
    }

    // Send email using Resend
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grannexcy.com';

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // For testing - change to 'noreply@grannex.com' after domain verification
      to: process.env.CONTACT_EMAIL || 'grannexinfo@gmail.com',
      subject: productName
        ? `Product Enquiry: ${productName} - from ${name}`
        : `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${productName ? 'Product Enquiry' : 'Contact Form Submission'}</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">

                  <!-- Logo Header -->
                  <tr>
                    <td style="background-color: #ffffff; padding: 30px 40px; text-align: center; border-bottom: 3px solid #315748;">
                      <img src="${siteUrl}/grannexLogo.png" alt="Grannex LTD" style="max-width: 200px; height: auto;" />
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 40px;">

                      <!-- Title -->
                      <h2 style="color: #315748; margin: 0 0 30px 0; font-size: 24px; font-weight: bold;">
                        ${productName ? 'Product Enquiry' : 'New Contact Form Submission'}
                      </h2>

                      <!-- Product Information -->
                      ${productName ? `
                        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 0 0 20px 0; border-left: 4px solid #315748;">
                          <h3 style="color: #315748; margin: 0 0 15px 0; font-size: 18px;">Product Information</h3>
                          <p style="margin: 8px 0; color: #333; line-height: 1.6;">
                            <strong style="color: #315748;">Product:</strong> ${productName}
                          </p>
                          ${productSlug ? `
                            <p style="margin: 8px 0; color: #333; line-height: 1.6;">
                              <strong style="color: #315748;">Link:</strong>
                              <a href="${siteUrl}/products/${productSlug}" style="color: #315748; text-decoration: underline;">
                                View Product Details
                              </a>
                            </p>
                          ` : ''}
                        </div>
                      ` : ''}

                      <!-- Contact Information -->
                      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 0 0 20px 0; border-left: 4px solid #315748;">
                        <h3 style="color: #315748; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h3>
                        <p style="margin: 8px 0; color: #333; line-height: 1.6;">
                          <strong style="color: #315748;">Name:</strong> ${name}
                        </p>
                        <p style="margin: 8px 0; color: #333; line-height: 1.6;">
                          <strong style="color: #315748;">Email:</strong>
                          <a href="mailto:${email}" style="color: #315748; text-decoration: underline;">${email}</a>
                        </p>
                        <p style="margin: 8px 0; color: #333; line-height: 1.6;">
                          <strong style="color: #315748;">Phone:</strong> ${phone}
                        </p>
                        <p style="margin: 8px 0; color: #333; line-height: 1.6;">
                          <strong style="color: #315748;">Country:</strong> ${country}
                        </p>
                        ${company ? `
                          <p style="margin: 8px 0; color: #333; line-height: 1.6;">
                            <strong style="color: #315748;">Company:</strong> ${company}
                          </p>
                        ` : ''}
                        <p style="margin: 8px 0; color: #333; line-height: 1.6;">
                          <strong style="color: #315748;">Company Profile:</strong> ${companyProfile}
                        </p>
                      </div>

                      <!-- Message -->
                      ${message ? `
                        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 0 0 20px 0; border-left: 4px solid #315748;">
                          <h3 style="color: #315748; margin: 0 0 15px 0; font-size: 18px;">Message</h3>
                          <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                        </div>
                      ` : ''}

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9f9f9; padding: 20px 40px; text-align: center; border-top: 1px solid #e0e0e0;">
                      <p style="margin: 0; color: #666; font-size: 12px; line-height: 1.5;">
                        This email was sent from the Grannex LTD website ${productName ? 'product enquiry' : 'contact'} form.
                      </p>
                      <p style="margin: 10px 0 0 0; color: #999; font-size: 11px;">
                        © ${new Date().getFullYear()} Grannex LTD. All rights reserved.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
