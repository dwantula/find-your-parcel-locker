import React from 'react';

interface Button {
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
}

const Button: React.FC<Button> = ({
  className,
  onClick,
  buttonText,
}: Button) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
