"use client";

import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import {
  AiFillMinusSquare,
  AiFillPlusSquare,
  AiOutlineCloseCircle,
  AiTwotoneGold,
} from "react-icons/ai";
import { BsFillArrowLeftSquareFill, BsFillBuildingsFill } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";
import { FaFilter, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsSideNavOpen,
  setSelectedMap,
  setUrlUpdate,
} from "../../../store/map-selector/map-selector-slice";
import { useRouter, useSearchParams } from "next/navigation";
import { MdLocationOn } from "react-icons/md";
import AreaFilter from "../filter-popups/area-filters";

const AreaSideNavbar = () => {
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
  const [isOpenIn, setIsOpenIn] = useState();

  const selectedMap = useSelector(
    (state) => state.mapSelectorReducer.selectedMap
  );
  const isSideNavOpen = useSelector(
    (state) => state.mapSelectorReducer.isSideNavOpen
  );
  const areaLyrs = useSelector((state) => state.mapSelectorReducer.areaLyrs);
  const areaZoomLevel = useSelector(
    (state) => state.mapSelectorReducer.areaZoomLevel
  );
  const areaInitialCenter = useSelector(
    (state) => state.mapSelectorReducer.areaInitialCenter
  );

  const selectMapHandler = (selectedValue) => {
    dispatch(setSelectedMap(selectedValue));
    const newUrl = `${window.location.pathname}?t=${selectedValue}&sn=${isSideNavOpen}&lyrs=${areaLyrs}&z=${areaZoomLevel}&c=${areaInitialCenter}`;
    window.history.replaceState({}, "", newUrl);
  };

  const closePopup = () => {
    setIsOpenIn(false);
  };

  return (
    <section className="flex gap-6">
      <div className={`duration-500 flex w-auto`}>
        <div
          className={`
        ${
          isSideNavOpen
            ? "bg-white dark:bg-black border-2 rounded-md border-blue-700"
            : ""
        } 
        h-[90vh] ml-2 mt-2
        ${isSideNavOpen ? "w-80 sm:w-72 mr-2" : "w-0"} 
        duration-500`}
        >
          <div
            className={`${isSideNavOpen ? "py-0.1 flex flex-col " : "hidden"}`}
          >
            <div className="ml-2 mr-2 mt-1 mb-1 flex items-center justify-center border-b-2 relative">
              <span className="font-bold">Company List</span>
              <AiOutlineCloseCircle
                onClick={closePopup}
                className="h-6 w-6 text-blue-700 cursor-pointer absolute right-0"
              />
            </div>
            {/* <div className="m-2">
              <Input
                isClearable
                type="text"
                size={"sm"}
                variant="flat"
                placeholder="Search here..."
                onClear={() => console.log("input cleared")}
                className="w-full rounded-lg border border-blue-500"
                startContent={<FaSearch className="h-4 w-4 text-gray-400" />}
              />
            </div> */}
          </div>
          <div className="mt-4 flex flex-col gap-4 relative"></div>
        </div>
      </div>
    </section>
  );
};
export default AreaSideNavbar;
