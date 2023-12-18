// // components/Accordion.js
// import React, { useState } from "react";
// import { FaChevronDown, FaChevronLeft, FaChevronUp } from "react-icons/fa";
// import { VscEyeClosed } from "react-icons/vsc";

// const AccordionItem = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <div
//         style={{alignItems: "center" }}
//         className="relative item-center flex pl-4 border rounded-lg border-blue-500 focus:outline-none bg-blue-600 text-white text-sm sm:text-sm py-2 w-full transition duration-150 ease-in"
//       >
//         <h3 style={{ margin: 0, marginRight: "10px" }}>{title}</h3>
//         <div className="flex absolute right-0 mr-4 gap-4">
//           <span onClick={toggleAccordion} className="cursor-pointer">
//             {isOpen ? <FaChevronDown /> : <FaChevronLeft />}
//           </span>
//           <span className="">
//             <VscEyeClosed />
//           </span>
//         </div>
//       </div>
//       {isOpen && <div>{content}</div>}
//     </div>
//   );
// };

// const Accordion = ({ items }) => {
//   return (
//     <div className="flex flex-col gap-1 w-full pb-2 pl-2 pr-2 pt-2">
//       {items.map((item, index) => (
//         <AccordionItem key={index} {...item} />
//       ))}
//     </div>
//   );
// };

// export default Accordion;
