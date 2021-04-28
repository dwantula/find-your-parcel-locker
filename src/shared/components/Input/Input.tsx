import React from 'react';

interface Input {
  className: string;
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Input> = ({
  className,
  name,
  onChange,
  placeholder,
  type,
  value,
}: Input) => {
  return (
    <input
      className={className}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

export default Input;
