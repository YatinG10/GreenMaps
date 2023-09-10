import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const BarChart = () => {
  // Data
  const data = [
    {
      chemical: "PM2.5",
      value: 2.5,
    },
    {
      chemical: "PM10",
      value: 10,
    },
    {
      chemical: "Ozone O3",
      value: 3,
    },
    {
      chemical: "Nitrogen dioxide NO2",
      value: 2,
    },
    {
      chemical: "Sulfur dioxide SO2",
      value: 2,
    },
    {
      chemical: "Carbon monoxide CO",
      value: 0.01,
    },
  ];

  return (
    <div style={{ height: "400px" }}>
      <ResponsiveBar
        data={data}
        keys={["value"]}
        indexBy="chemical"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "set1" }}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        enableLabel={false}
      />
    </div>
  );
};

export default BarChart;
