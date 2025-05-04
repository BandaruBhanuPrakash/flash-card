import React from "react";
import HeaderTabs from "./HeaderTabs";
import SortButton from "./SortButton";
import EmptyState from "./EmptyState";

const FlashcardLibrary = () => {
  return (
    <div className="min-h-screen bg-[#0F0F2D] text-white px-6 py-8">
      <h1 className="text-4xl font-bold mb-6">Your library</h1>
      <HeaderTabs />
      <div className="flex justify-between items-center mb-10">
        <SortButton />
      </div>
      <EmptyState />
    </div>
  );
};

export default FlashcardLibrary;