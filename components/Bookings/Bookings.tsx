import React from "react";
import AutoCompleteAddress from "./AutoCompleteAddress";

const Bookings = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold">Booking</h2>
      <div className="border-[1px] p-5 rounded-md mt-2">
        <AutoCompleteAddress />
      </div>
    </div>
  );
};

export default Bookings;
