import React from "react";

export const SectionBlock = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
