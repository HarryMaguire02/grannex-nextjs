'use client';

import { useState, useEffect, useRef } from 'react';

type Option = {
  value: string;
  label: string;
};

type MultiSelectProps = {
  options: Option[];
  selected: string[];
  onChange: (values: string[]) => void;
  onClear: () => void;
  placeholder?: string;
};

export default function MultiSelect({
  options,
  selected,
  onChange,
  onClear,
  placeholder = 'Select...'
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter(v => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const getDisplayText = () => {
    if (selected.length === 0) return placeholder;
    if (selected.length === 1) {
      return options.find(o => o.value === selected[0])?.label || selected[0];
    }
    return `${selected.length} selected`;
  };

  return (
    <div className="relative w-full sm:w-64" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full pl-4 pr-10 py-2.5 border border-primary/20 rounded-lg text-sm font-normal cursor-pointer transition-colors text-left ${
          selected.length > 0
            ? 'bg-green-light/30 ring-2 ring-green-medium text-primary'
            : 'bg-white hover:bg-primary/5 text-primary/50'
        }`}
      >
        {getDisplayText()}
      </button>

      {selected.length > 0 ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-primary/60 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
          title="Clear filter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-primary/20 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map(option => (
            <label
              key={option.value}
              className="flex items-center gap-3 px-4 py-2.5 hover:bg-primary/5 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={selected.includes(option.value)}
                onChange={() => toggleOption(option.value)}
                className="w-4 h-4 text-green-medium border-primary/30 rounded focus:ring-green-medium"
              />
              <span className="text-sm text-primary">{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
