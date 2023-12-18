import React from "react";

export const Main = ({ children, ...props }) => {
  return <main {...props}>{children}</main>;
};
