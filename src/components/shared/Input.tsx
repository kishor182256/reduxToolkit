import React from 'react';

interface InputProps {
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder?:string
}

const Input: React.FC<InputProps> = ({  value, onChange,type }) => {
  
  return (
    <div>
      <input value={value} type={type} onChange={onChange}  />
    </div>
  );
};

export default Input;
