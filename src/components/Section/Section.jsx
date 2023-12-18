import React from "react";

export const Section = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
