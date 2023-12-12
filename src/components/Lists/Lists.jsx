import React from "react";

export const Lists = ({ children, ...props }) => {
  return <ul {...props}>{children}</ul>;
};
