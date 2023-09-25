import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "";
  onClickButton: () => void;
}

function Button({ children, color, onClickButton }: Props) {
  if (color === undefined || color === "") color = "primary";
  return (
    <button
      type="button"
      data-bs-dusmiss="alert"
      className={"btn btn-" + color}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
}

export default Button;
