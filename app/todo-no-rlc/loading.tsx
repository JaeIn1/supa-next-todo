"use client";

import React from "react";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <div>
        <PulseLoader />
      </div>
      <div className="text-xl font-bold my-2">Loading...</div>
    </div>
  );
};

export default Loading;
