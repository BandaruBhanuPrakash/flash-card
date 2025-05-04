import React from "react";

const HeaderTabs = () => {
  const tabs = ["Flashcard sets", "Practice tests", "Study guides", "Expert solutions", "Folders"];

  return (
    <div className="flex space-x-8 text-sm font-medium border-b border-gray-600 pb-2 mb-10">
      {tabs.map((tab, idx) => (
        <span
          key={tab}
          className={`cursor-pointer ${
            idx === 0
              ? "text-white border-b-2 border-white pb-1"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab}
        </span>
      ))}
    </div>
  );
};

export default HeaderTabs;
