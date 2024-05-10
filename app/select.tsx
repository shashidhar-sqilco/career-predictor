import { ErrorMessage, FieldProps } from 'formik';
import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends FieldProps {
  label: string;
  options: Option[];
  placeholder: string;
  error?: string; // Add error prop
  disabled?: boolean;
}

const SelectMenu: React.FC<SelectProps> = ({
  field,
  form,
  label,
  options,
  placeholder,
  error, // Receive error prop
  disabled,
}) => {
  const { name, value } = field;
  const { touched } = form;
  const showError = error && touched[name]; // Use error prop instead of errors[name]

  return (
    <div className="mt-4  max-sm:w-full   ">
      <label className="  mt-1 text-xl leading-7 text-[#171710] max-md:ml-2.5 mb-auto  josefin-sans-font">
        {label}
      </label>
      <br />
      <select
        {...field}
        disabled={disabled}
        className={`rounded-lg border-b text-[18px] josefin-sans-font justify-center border-pink-300 bg-[rgba(19,19,19,0.05)] bg-opacity-25 py-1 mt-1 w-[333px] max-md:w-full text-[#525252] pl-2 ${
          showError ? 'border-red-500' : ''
        }`}
      >
        <option value="" disabled >
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {showError && (
        <div className="text-red-500 mt-1">{error}</div>
      )}
    </div>
  );
};

export default SelectMenu;
