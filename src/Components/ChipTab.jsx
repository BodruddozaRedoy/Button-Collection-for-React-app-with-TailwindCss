import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Home", "Search", "About", "Blog"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="w-full bg-slate-900 text-white flex items-center justify-between">
      <h1>REdoy</h1>
      <div className="px-4 py-6  flex items-center flex-wrap gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
    <div>
    <button
      className={` text-white  hover:text-slate-200 hover:bg-slate-700
       text-md transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">Login</span>
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
    </button>
    </div>
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-md transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;