import React from 'react';

export interface InputProps {
  label: string;
  description?: string;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  description,
  name,
  value = '',
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div>
      <label htmlFor={name} className="block text-gray-800 font-semibold text-sm">
        {label}
      </label>
      <div className="mt-2">
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
        />
      </div>
      {description && (
        <label className="pt-1 block text-gray-500 text-sm">{description}</label>
      )}
    </div>
  );
};

export default Input;
