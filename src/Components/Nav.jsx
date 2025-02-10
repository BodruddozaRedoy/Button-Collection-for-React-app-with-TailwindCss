import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

// export const Nav = () => {
//   return (
//     <div className="bg-neutral-100 py-20">
//       <SlideTabs />
//     </div>
//   );
// };

const navList = [
  {title: "Home"},
  {title: "All Foods"},
  {title: "Gallery"},
]

export const Nav = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [nav, setNav] = useState("Home")
  return (
    <ul
      onCanPlay={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full font-poppins select-none bg-white p-1"
    >
      {
        navList.map(({title}) => (

          <div onClick={() => setNav(title === "Home" ? "Home" : "")}><Tab nav={nav} setPosition={setPosition}>{title}</Tab></div>
        ))
      }
      {/* <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Tab setPosition={setPosition}>Blog</Tab> */}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, nav }) => {
  const ref = useRef(null);


  return (
    <li
      ref={ref}
      onClick={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={` relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase font-semibold text-black md:px-5 md:py-3 md:text-base`}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className={` absolute z-0 h-7 rounded-full bg-red-500 !text-white  md:h-12`}
    />
  );
};