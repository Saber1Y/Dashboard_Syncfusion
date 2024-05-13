import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import { Button } from "../components";
import { data } from "autoprefixer";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-75 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-blue-900 font-bold text-base">Balance</p>
              <p className="text-2xl text-black-500">$10,361</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Transact"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((data) => (
            <div key={data.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button type="button" style={{ color: data.iconColor, backgroundColor: data.iconBg}}>
                {data.icon}
              </button>
            </div>
          ))}
        </div>
        <p className="mt-3">
          <span className="text-lg font-semibold">
            {data.amount}
          </span>
          <span className={`text-sm text-${data.pcColor} ml-3`}>
            {data.percentage}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Ecommerce;
