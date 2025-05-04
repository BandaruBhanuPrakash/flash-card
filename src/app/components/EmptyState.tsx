import React from "react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="w-32 h-24 bg-white rounded-lg shadow-md mb-6 flex items-center justify-center">
        <div className="text-black font-bold text-2xl">📝</div>
      </div>
      <h2 className="text-xl font-semibold">You have no sets yet</h2>
      <p className="text-sm text-gray-400 mt-2">Sets you create or study will be displayed here</p>
      <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
        Create a set
      </button>
    </div>
  );
};

export default EmptyState;