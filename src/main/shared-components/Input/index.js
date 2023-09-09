import React from "react";

export default function Input({
  type,
  style,
  id,
  name,
  placeholder,
  autoComplete,
  onChange,
  value,
  checked,
}) {
  return (
    <input
      type={type}
      className={style}
      id={id}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onChange={onChange}
      value={value}
      checked={checked}
    />
  );
}
