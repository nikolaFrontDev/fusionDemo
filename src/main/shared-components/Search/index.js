import React from "react";
import Input from "../Input";

function Search({type, style, placeholder, autoComplete, onChange}) {
  return (
    <Input
      type={type}
      style={style}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onChange={onChange}
    />
  );
}
export default Search;
