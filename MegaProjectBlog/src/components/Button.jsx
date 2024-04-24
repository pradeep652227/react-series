/* eslint-disable react/prop-types */
import React from "react";

export default function Button({
  className = "",
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
