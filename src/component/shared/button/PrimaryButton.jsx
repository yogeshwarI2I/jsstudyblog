import React from "react";

const baseClasses =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-gray-100",
  ghost:
    "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 focus:ring-gray-400",
};

function PrimaryButton({
  className = "",
  type = "button",
  disabled = false,
  children,
  name,
  variant = "primary",
  onClick,
}) {
  const variantClasses = variants[variant] ?? variants.primary;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children ?? name}
    </button>
  );
}

export default PrimaryButton;
