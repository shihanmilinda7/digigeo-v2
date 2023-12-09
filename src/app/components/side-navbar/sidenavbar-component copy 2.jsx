// "use client";

// import { Button, Input } from "@nextui-org/react";
// import React, { useEffect, useState } from "react";
// import {
//   AiFillMinusSquare,
//   AiFillPlusSquare,
//   AiTwotoneGold,
// } from "react-icons/ai";
// import { BsFillArrowLeftSquareFill, BsFillBuildingsFill } from "react-icons/bs";
// import { GiEarthAmerica } from "react-icons/gi";
// import { FaFilter, FaSearch } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setIsAreaSideNavOpen,
//   setIsSideNavOpen,
// } from "../../../store/map-selector/map-selector-slice";
// import { useRouter, useSearchParams } from "next/navigation";
// import { MdLocationOn } from "react-icons/md";

// const SideNavbar = () => {
//   let pathname = "";
//   const dispatch = useDispatch();
//   const router = useRouter();
//   try {
//     pathname = window.location.href;
//   } catch (error) {}

//   if (pathname) {
//     const r = pathname.indexOf("/", 9);
//     if (r !== -1) {
//       pathname = pathname.substring(0, r);
//     }
//   }

//   const isSideNavOpen = useSelector(
//     (state) => state.mapSelectorReducer.isSideNavOpen
//   );

//   // const [open, setOpen] = useState();

//   // useEffect(() => {
//   //   setOpen(Boolean(isAreaSideNavOpen));
//   // }, [isAreaSideNavOpen]);

//   const collapsibleBtnHandler = () => {
//     const tmpValue = String(isSideNavOpen).toLowerCase() === "true";
//     dispatch(setIsSideNavOpen(!tmpValue));
//   };

//   return (
//     <section className="flex gap-6">
//       <div className={`duration-500 flex w-auto`}>
//         <div
//           className={`
//         ${
//           isSideNavOpen
//             ? "bg-white dark:bg-black border-2 rounded-md border-blue-700"
//             : ""
//         } 
//         h-[90vh] ml-2 mt-2
//         ${isSideNavOpen ? "w-80 sm:w-96 mr-2" : "w-0"} 
//         duration-500`}
//         >
//           <div
//             className={`${isSideNavOpen ? "py-0.1 flex flex-col " : "hidden"}`}
//           >
//             <div className="ml-2 mr-2 mt-1 mb-1 flex items-center justify-center border-b-2">
//               <span className="font-bold">Overview</span>
//             </div>
//             <div className="m-2">
//               <Input
//                 // list={list}
//                 isClearable
//                 type="text"
//                 size={"sm"}
//                 variant="flat"
//                 placeholder="Search here..."
//                 onClear={() => console.log("input cleared")}
//                 className="w-full rounded-lg border border-blue-500"
//                 startContent={<FaSearch className="h-4 w-4 text-gray-400" />}
//               />
//             </div>
//             <div className="flex flex-col gap-2 w-full pb-2 pl-2 pr-2">
//               <div className="flex justify-center">
//                 <button
//                   // onClick={masterLoginEvent}
//                   className="relative flex items-center border rounded-lg border-blue-500 focus:outline-none text-blue-600 text-sm sm:text-sm bg-white hover:bg-blue-200 py-2 w-full transition duration-150 ease-in"
//                 >
//                   <MdLocationOn className="h-6 w-6 ml-4" />
//                   <span className="uppercase ml-4 font-semibold">
//                     Exploration areas
//                   </span>
//                   <FaFilter className="absolute right-0 h-4 w-4 mr-6" />
//                 </button>
//               </div>
//               <div className="flex justify-center">
//                 <button
//                   // onClick={masterLoginEvent}
//                   className="relative flex items-center border rounded-lg border-blue-500 focus:outline-none text-blue-600 text-sm sm:text-sm bg-white hover:bg-blue-200 py-2 w-full transition duration-150 ease-in"
//                 >
//                   <BsFillBuildingsFill className="h-6 w-6 ml-4" />
//                   <span className="uppercase ml-4 font-semibold">
//                     Properties
//                   </span>
//                   <FaFilter className="absolute right-0 h-4 w-4 mr-6" />
//                 </button>
//               </div>
//               <div className="flex justify-center">
//                 <button
//                   // onClick={masterLoginEvent}
//                   className="relative flex items-center border rounded-lg border-blue-500 focus:outline-none text-blue-600 text-sm sm:text-sm bg-white hover:bg-blue-200 py-2 w-full transition duration-150 ease-in"
//                 >
//                   <AiTwotoneGold className="h-6 w-6 ml-4" />
//                   <span className="uppercase ml-4 font-semibold">
//                     Companies
//                   </span>
//                   <FaFilter className="absolute right-0 h-4 w-4 mr-6" />
//                 </button>
//               </div>
//             </div>
//             <div className="w-full pb-2 pl-2 pr-2 pt-8">
//               <div className="flex justify-center">
//                 <button
//                   // onClick={masterLoginEvent}
//                   className="relative flex items-center justify-center border rounded-lg border-blue-500 focus:outline-none bg-blue-600 text-white text-sm sm:text-sm bg-white hover:bg-blue-400 py-2 w-full transition duration-150 ease-in"
//                 >
//                   {/* <AiTwotoneGold className="h-6 w-6 ml-4" /> */}
//                   <span className="uppercase font-semibold">
//                     Reset all filters
//                   </span>
//                   {/* <FaFilter className="absolute right-0 h-4 w-4 mr-6" /> */}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="mt-4 flex flex-col gap-4 relative"></div>
//         </div>
//         <div className="w-12">
//           <div className="flex flex-col gap-4 mt-2">
//             <Button isIconOnly variant="bordered" className="bg-blue-700">
//               <BsFillArrowLeftSquareFill
//                 // size={26}
//                 className={`cursor-pointer text-white h-6 w-6 ${
//                   isSideNavOpen ? "" : "rotate-180"
//                 }`}
//                 onClick={() => collapsibleBtnHandler()}
//               />
//             </Button>
//             <Button isIconOnly variant="bordered" className="bg-blue-700">
//               <GiEarthAmerica className={`text-white cursor-pointer h-6 w-6`} />
//             </Button>
//             <Button isIconOnly variant="bordered" className="bg-blue-700">
//               <AiFillPlusSquare
//                 className={`text-white cursor-pointer h-6 w-6`}
//               />
//             </Button>
//             <Button isIconOnly variant="bordered" className="bg-blue-700">
//               <AiFillMinusSquare
//                 className={`text-white cursor-pointer h-6 w-6`}
//               />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default SideNavbar;
