import React from "react";

const Button = ({ btnText, className }) => {
  return (
    <button
      className={`font-medium py-3 px-6 rounded-10 text-lg ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
