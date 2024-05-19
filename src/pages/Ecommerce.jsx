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
import { SparkLine } from "../components";

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

      <div className="flex flex-wrap justify-center gap-10">
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

          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-bold">$10,564</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>

              <div className="mt-8">
                <p className="text-3xl font-semibold">$3,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  // color={currentColor}
                />
              </div>

              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={"blue"}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>

            {/* <Stacked width="320px" height="360px" /> */}
          </div>
        </div>
      </div>

      <div>
        <div className=" rounded-2xl md:w-400 p-4 m-3">
          <div className="flex justify-between items-center ">
            <p className="font-semibold text-white text-2xl">Earnings</p>

            <div>
              <p className="text-2xl text-white font-semibold mt-8">
                $63,448.78
              </p>
              <p className="text-gray-200">Monthly revenue</p>
            </div>
          </div>

          <div className="mt-4">
            {/* <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" /> */}
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
          <div>
            <p className="text-2xl font-semibold ">$43,246</p>
            <p className="text-gray-400">Yearly sales</p>
          </div>

          <div className="w-40">
            {/* <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
