"use client";
import React from "react";

interface FormFieldInputProps {
  label?: string,
  layout: 'vertical' | 'horizontal'
  name: string;
  type: string;
  value: string | number;
  unit?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormFieldInput = ({placeholder, label, layout, name, type, value, unit, onChange }: FormFieldInputProps) => {
  return (
    <div className={`flex ${layout === 'vertical' ? 'flex-col gap-2' : 'flex-row gap-3 items-center'}`}>
      {label && <label htmlFor={name} className="capitalize min-w-25">{label}</label>}
      <div className={`flex items-center gap-2${layout === 'vertical' ? ' flex-col' : ' flex-row'}`}>
        <input
          {...(type === 'number' && { min: 0, step: 0.01, inputMode: "decimal" })}
          {...(placeholder && { placeholder })}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`px-5 py-3 border border-[var(--color-border)] rounded-md [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none${layout === 'vertical' ? ' w-full' : ' w-auto'}`}
        />
        {unit && <span className="text-sm text-gray-500">{unit}</span>}
      </div>
      
    </div>
  );
};

export default FormFieldInput;
