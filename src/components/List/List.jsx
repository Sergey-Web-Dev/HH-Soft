import React from "react";

export const List = ({ children, ...props }) => {
  return <li {...props}>{children}</li>;
};
