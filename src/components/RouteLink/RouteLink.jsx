import React from "react";
import { Link } from "react-router-dom";

export const RouteLink = ({ id, route, name, className }) => {
  return (
    <Link className={className} to={route}>
      {name}
    </Link>
  );
};
