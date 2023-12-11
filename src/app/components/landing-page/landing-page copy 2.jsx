// "use client";

// import { useDispatch, useSelector } from "react-redux";
// import { WorkspanSelector } from "../map-workspans/workspan-selector";
// import SideNavbar from "../side-navbar/sidenavbar-component";
// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import {
//   setAreaInitialCenter,
//   setAreaLyrs,
//   setAreaZoomLevel,
//   setCommodityInitialCenter,
//   setCommodityLyrs,
//   setCommodityZoomLevel,
//   setCompanyInitialCenter,
//   setCompanyLyrs,
//   setCompanyZoomLevel,
//   setCurrentSearchString,
//   setIsSideNavOpen,
//   setSelectedMap,
// } from "@/store/map-selector/map-selector-slice";

// export const LandingPage = () => {
//   const router = useRouter();

//   const isSideNavOpen = useSelector(
//     (state) => state.mapSelectorReducer.isSideNavOpen
//   );
//   // const currentSearchString = useSelector(
//   //   (state) => state.mapSelectorReducer.currentSearchString
//   // );

//   // useEffect(() => {
//   //   // if (urlUpdate) {
//   //   router.push(currentSearchString, undefined, { shallow: true });
//   //   // }
//   // }, [currentSearchString]);

//   // useEffect(() => {
//   //   // Check if the page is in the initial loading state
//   //   if (router.isFallback) {
//   //     console.log("Page is in the initial loading state");
//   //   } else {
//   //     console.log("Page has finished loading");
//   //   }
//   // }, [router.isFallback]);

//   // const dispatch = useDispatch();
//   const searchParams = useSearchParams();
//   const mapType = searchParams.get("t");
//   const isNavOpen = searchParams.get("sn");
//   const mapLyrs = searchParams.get("lyrs");
//   const mapZoom = searchParams.get("z");
//   const mapCenter = searchParams.get("c");

//   // const currentSearchString = useSelector(
//   //   (state) => state.mapSelectorReducer.currentSearchString
//   // );

//   // useEffect(() => {
//   //   if (isInitialLoading) {
//   //     // updateRedux();
//   //   }
//   // }, []);

//   // useEffect(() => {
//   //   router.push(currentSearchString, undefined, { shallow: true });
//   //   // router.push(currentSearchString);
//   // }, [currentSearchString]);

//   // const updateRedux = async () => {
//   //   // console.log("call 1");
//   //   //TODO>>>>>>>>>>>>>>>>>>> handle if useSearchParam Accidantally change
//   //   if (mapType) {
//   //     dispatch(setSelectedMap(mapType));
//   //     switch (mapType) {
//   //       case "area":
//   //         dispatch(
//   //           setIsSideNavOpen(String(isNavOpen).toLowerCase() === "true")
//   //         );
//   //         dispatch(setAreaLyrs(mapLyrs));
//   //         dispatch(setAreaZoomLevel(mapZoom));
//   //         dispatch(setAreaInitialCenter(mapCenter));

//   //         break;
//   //       case "company":
//   //         dispatch(
//   //           setIsSideNavOpen(String(isNavOpen).toLowerCase() === "true")
//   //         );
//   //         dispatch(setCompanyLyrs(mapLyrs));
//   //         dispatch(setCompanyZoomLevel(mapZoom));
//   //         dispatch(setCompanyInitialCenter(mapCenter));

//   //         break;
//   //       case "commodity":
//   //         dispatch(
//   //           setIsSideNavOpen(String(isNavOpen).toLowerCase() === "true")
//   //         );
//   //         dispatch(setCommodityLyrs(mapLyrs));
//   //         dispatch(setCommodityZoomLevel(mapZoom));
//   //         dispatch(setCommodityInitialCenter(mapCenter));

//   //         break;

//   //       default:
//   //         break;
//   //     }
//   //   }
//   //   setIsInitialLoading(false);
//   //   //  else {
//   //   //   // console.log("currentSearchString", currentSearchString);
//   //   //   dispatch(setCurrentSearchString());
//   //   // }
//   // };

//   return (
//     <div className="w-full flex bg-white">
//       <div className={`${isSideNavOpen ? "z-40" : "fixed top-15 left-0 z-40"}`}>
//         {mapType}-
//         {isNavOpen}-
//         {mapLyrs}-
//         {mapZoom}-
//         {mapCenter}
//         <SideNavbar />
//       </div>
//       <div className="z-0">
//         <WorkspanSelector />
//       </div>
//     </div>
//   );
// };
