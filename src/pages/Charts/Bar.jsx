import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryYAxis,
  barPrimaryXAxis,
} from "../../data/dummy";

import { Header } from "../../components";

const Bar = () => {
  return (
    <div>
      <Header title="Inflation Rate in Percentage" />

      <p className="flex justify-center font-medium text-2xl my-10">
        Olympic Medal Counts - RIO
      </p>

      <ChartComponent
        id="bar-Chart"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        tooltip={{ enable: true }}
        chartArea={{ border: { width: 0 } }}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((series, index) => (
            <SeriesDirective key={index} {...series} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
