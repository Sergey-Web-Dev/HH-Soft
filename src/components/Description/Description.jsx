import React from "react";

export const Description = ({ children, ...props }) => {
  return <p {...props}>{children}</p>;
};
