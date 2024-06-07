import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryYAxis,
  LinePrimaryXAxis,
} from "../../data/dummy";

const LineChart = () => {
  return (
    <ChartComponent
      id="lineChart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      tooltip={{ enable: true }}
      chartArea={{ border: { width: 0 } }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((series, index) => (
          <SeriesDirective key={index} {...series} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
