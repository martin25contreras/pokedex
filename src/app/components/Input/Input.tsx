import React, { useState } from "react";

interface ActionInputProps {
  placeholder?: string;
  buttonText: string;
  onAction: (value: string) => void;
  className?: string;
}

export function Input({
  placeholder = "Escribe aquí...",
  buttonText,
  onAction,
  className = "",
}: ActionInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleActionClick = () => {
    if (inputValue.trim() !== "") {
      onAction(inputValue);
    }
  };

  return (
    <div className={`flex items-center w-full max-w-md ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full rounded-l-md rounded-r-none border border-r-0 border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={handleActionClick}
        className="rounded-r-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
      >
        {buttonText}
      </button>
    </div>
  );
}
