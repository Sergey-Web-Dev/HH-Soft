import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Lists } from "../Lists/Lists";
import { List } from "../List/List";
import { LogoHeader } from "../Logo/LogoHeader";
import { RouteLink } from "../RouteLink/RouteLink";
import { icons, mockRoutesData } from "../../constants/mockRoutesData.js";
import { Icon } from "../Icon/Icon";
import { Wrapper } from "../Wrapper/Wrapper";

export const Header = ({ ...props }) => {
  return (
    <header {...props}>
      <Wrapper className="absolute left-0 top-0 w-full h-full bg-black [clip-path:polygon(0%_0%,0%_100%,100%_0%)]" />
      <Navbar className="relative flex justify-between items-stretch w-85 mx-0 mx-auto z-50">
        <RouteLink route="/" name={<LogoHeader />} />
        <Lists className="flex items-center gap-8">
          {mockRoutesData.map(({ id, route, name }) => (
            <RouteLink
              className="text-white"
              key={id}
              route={route}
              name={name}
            />
          ))}
        </Lists>
        <Lists className="flex items-center">
          <List className="flex relative">
            {icons.map(({ id, src, alt, route, className }) => (
              <RouteLink
                key={id}
                route={route}
                className={className}
                name={<Icon src={src} alt={alt} />}
              />
            ))}
          </List>
          <List>
            <RouteLink
              className="font-ubuntu font-black text-white"
              route="/"
              name="+7 (982) 623 26 17"
            />
          </List>
        </Lists>
      </Navbar>
    </header>
  );
};
