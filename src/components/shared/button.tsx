import React from 'react';

type ButtonProps = {
  onClick?: () => any;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

const Button = ({ onClick, children, variant  }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
    >
      {children}
    </button>
  );
};

export default Button;
