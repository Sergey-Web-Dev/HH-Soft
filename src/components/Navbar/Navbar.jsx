import React from "react";

export const Navbar = ({ children, ...props }) => {
  return <nav {...props}>{children}</nav>;
};
