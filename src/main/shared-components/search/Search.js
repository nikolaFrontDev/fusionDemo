import React from "react";
import Input from "./../input/Input";

export default function Search(props) {
  return (
    <Input
      type={props.type}
      style={props.style}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      onChange={props.onChange}
    />
  );
}
