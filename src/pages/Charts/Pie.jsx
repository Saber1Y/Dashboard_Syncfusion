import React from "react";

import { pieChartData } from "../../data/dummy";

import { Header } from "../../components";
import { PieChart } from "../../components/index";

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Pie" />
      <div className="w-full">
        <div id="chart-pie" data={pieChartData} height="full" />
      </div>
    </div>
  );
};

export default Pie;
