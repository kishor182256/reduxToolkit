import React from 'react';

type ButtonProps = {
  onClick?: () => any;
  children: React.ReactNode;
  disabled?: boolean
};

const Button = ({ onClick, children,disabled }: ButtonProps) => {
  return (
    <button
      disabled
      onClick={onClick}
      style={{marginTop:'20px',width:'20%'}}
      className="btn btn-primary btn-lg"
    >
      {children}
    </button>
  );
};

export default Button;
