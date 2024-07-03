import React from "react";

export const Dropdown = (props) => {
  return (
    <ul className="dropdownItem flex items-center font-semibold my-2 cursor-pointer transition-colors hover:text-pink-200">
      <li className="text-2xl mr-3">{props.img}</li>
      <li className="text-xl">{props.text}</li>
    </ul>
  );
};
