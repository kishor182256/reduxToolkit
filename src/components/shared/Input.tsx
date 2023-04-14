import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder?: string;
  error?: boolean;
  name?: string;
  ref?:UseFormRegister<FieldValues>
}

const Input: React.FC<InputProps> = ({ value, onChange, type }) => {
  return (
    <div>
      <input
        value={value}
        type={type}
        onChange={onChange}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default Input;
