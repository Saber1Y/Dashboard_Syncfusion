import React from "react";
import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-13 bg-white rounded-3xl">
      <Header title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
