import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "danger";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
}) => {
  const baseStyles =
    "px-6 py-2 rounded-lg font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<string, string> = {
    primary:
      "bg-yellow-400 text-slate-900 hover:bg-yellow-500 focus:ring-yellow-500",
    secondary:
      "bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-600",
    outline:
      "border border-slate-800 text-slate-800 hover:bg-slate-100 focus:ring-slate-500",
    danger:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
  };

  const disabledStyles =
    "opacity-50 cursor-not-allowed hover:none focus:ring-0";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? disabledStyles : ""
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
