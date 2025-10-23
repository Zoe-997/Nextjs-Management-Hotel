"use client";
import React from "react";
import { FaAngleDown } from 'react-icons/fa6';

export interface OptionProps {
  label: string;
  value: string | number;
}

interface FormFieldSelectProps {
  label?: string,
  layout: 'vertical' | 'horizontal'
  name: string;
  options: OptionProps[];
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormFieldSelect = ({label, layout, name, options, value, onChange }: FormFieldSelectProps) => {
  return (
    <div className={`flex ${layout === 'vertical' ? 'flex-col gap-2' : 'flex-row gap-3 items-center'}`}>
      {label && <label htmlFor={name} className="capitalize min-w-25">{label}</label>}
      <div className="relative">
        <select
          name={name}
          id={name}
          value={value}
          className={`pl-5 pr-10 py-3 border border-[var(--color-border)] rounded-md appearance-none ${layout === 'vertical' ? 'w-full' : 'w-auto'} bg-[var(--background)] text-[var(--base)]`}>
          {options?.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
        <span className="absolute top-[50%] -translate-y-[50%] right-5"><FaAngleDown /></span>
      </div>
    </div>
  );
};

export default FormFieldSelect;
