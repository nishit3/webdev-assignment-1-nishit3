import React from "react";
export default function Square({ children }) {
  const num = Number(children);
  return <span id="wd-square">{num * num}</span>;
}
