import React from "react";

export const ImageMap = () => {
  return (
    <>
      <img src="/laptop.png" alt="laptop" useMap="#laptop" />

      <map name="laptop">
        <area
          shape="rect"
          coords="90,30,630,360"
          alt="hh_soft_video"
          href="https://www.youtube.com/"
        />
      </map>
    </>
  );
};
