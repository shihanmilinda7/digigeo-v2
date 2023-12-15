"use client";

import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";

import { useDispatch, useSelector } from "react-redux";
// import { setIsAreaSideNavOpen } from "../../../store/map-selector/map-selector-slice";
import { useRouter, useSearchParams } from "next/navigation";

const AreaBottomSideComp = () => {
  let pathname = "";
  const dispatch = useDispatch();
  const router = useRouter();
  try {
    pathname = window.location.href;
  } catch (error) {}

  if (pathname) {
    const r = pathname.indexOf("/", 9);
    if (r !== -1) {
      pathname = pathname.substring(0, r);
    }
  }

  const isAreaSideNavOpen = useSelector(
    (state) => state.mapSelectorReducer.isAreaSideNavOpen
  );

  return (
    <section className="flex">
      <div className="flex flex-col">
        <span className="font-bold">Map Layers</span>
        <Accordion variant="splitted" className="w-full">
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1" className="w-full">
            <span className="font-bold w-full">Map Layers 1</span>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            <span className="font-bold">Map Layers 2</span>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            <span className="font-bold">Map Layers 3</span>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
export default AreaBottomSideComp;
