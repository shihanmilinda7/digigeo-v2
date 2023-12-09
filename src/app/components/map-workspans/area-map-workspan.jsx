"use client";

import React, { Suspense } from "react";
import { useRef } from "react";
import AreaBottomSideNavbar from "../side-navbar/area-bottomsidenavbar-component";
import Spinner from "../spinner";
import { useSelector } from "react-redux";
import { AreaMap } from "../maps/area-map";

export const AreaMapWorkspan = () => {
  return (
    <div className="flex">
      {/* <Suspense fallback={<Spinner />}> */}
        <AreaMap />
      {/* </Suspense> */}
    </div>
  );
};
