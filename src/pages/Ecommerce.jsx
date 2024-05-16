import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuDot } from "react-icons/lu";
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
    <div className="mt-22">
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
            <div
              key={data.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: data.iconColor, backgroundColor: data.iconBg }}
              >
                {data.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{data.amount}</span>
                <span
                  className={`text-sm text-dark:text-gray-200 dark:bg-secondary-dark-bg text-${data.pcColor} ml-3`}
                >
                  {data.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{data.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
        <p className="font-semibold text-xl">Revenue Updates</p>
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-2 text-gray-200 hover:drop-shadow-xl9">
            <span>
              <LuDot />
            </span>
            <span>Expense</span>
          </p>
          <p className="flex items-center gap-2 text-gray-400 hover:drop-shadow-xl">
          <span>
              <LuDot />
            </span>
            <span>Budget</span>
          </p>
        </div>
      </div>
      </div>

    </div>
    </div>
  );
};

export default Ecommerce;
