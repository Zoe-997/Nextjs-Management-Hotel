"use client";
import React from "react";

interface FormFieldTextAreaProps {
  label?: string;
  layout: 'vertical' | 'horizontal';
  name: string;
  value: string | number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  cols?: number;
  rows?: number;
}

const FormFieldTextArea = ({
  placeholder,
  label,
  layout,
  name,
  value,
  onChange,
  cols = 3,
  rows = 3,
}: FormFieldTextAreaProps) => {
  return (
    <div
      className={`flex ${
        layout === 'vertical'
          ? 'flex-col gap-2'
          : 'flex-row gap-3 items-center'
      }`}
    >
      {label && (
        <label htmlFor={name} className="capitalize min-w-30">
          {label}
        </label>
      )}

      <textarea
        {...(placeholder && { placeholder })}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        cols={cols}
        rows={rows}
        className="px-5 py-3 border border-[var(--color-border)] rounded-md resize-y focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

export default FormFieldTextArea;