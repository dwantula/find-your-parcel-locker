import React, { memo, ReactElement } from 'react';
import { Props } from './types';

function Input({
  className,
  name,
  onChange,
  placeholder,
  type,
  value,
}: Props): ReactElement {
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
}

export default memo(Input);
