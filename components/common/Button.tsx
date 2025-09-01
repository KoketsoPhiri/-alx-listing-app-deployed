// components/common/Button.tsx
import React from 'react';
import { ButtonProps } from '../../interfaces'; // Adjust path if needed

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;