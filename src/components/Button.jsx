import React from "react";
import { useStateContext } from "../context/ContextProvider";

const Button = ({ bgColor, color, size, icon, text, borderRadius }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl  hover:bg-transparent font-bold font-popp`}
      onClick={() => setIsClicked(initialState)}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
