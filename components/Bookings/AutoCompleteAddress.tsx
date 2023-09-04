import React from "react";

const AutoCompleteAddress = () => {
  return (
    <div className="mt-5">
      <div>
        <label className="text-gray-500">Where From?</label>
        <input
          type="text"
          className="bg-white border-[1px] rounded-md outline-none p-1 focus:border-blue-300 w-full"
        />
      </div>
      <div className="mt-3">
        <label className="text-gray-500">Where To?</label>
        <input
          type="text"
          className="bg-white border-[1px] rounded-md outline-none p-1 focus:border-blue-300 w-full"
        />
      </div>
    </div>
  );
};

export default AutoCompleteAddress;
