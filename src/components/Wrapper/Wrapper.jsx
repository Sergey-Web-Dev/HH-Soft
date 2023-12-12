import React from "react";

export const Wrapper = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
