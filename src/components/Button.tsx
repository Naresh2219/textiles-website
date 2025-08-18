import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
