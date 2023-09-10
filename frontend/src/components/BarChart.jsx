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
      chemical: "NO2",
      value: 2,
    },
    {
      chemical: "SO2",
      value: 2,
    },
    {
      chemical: "CO",
      value: 0.01,
    },
  ];

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <ResponsiveBar
        data={data}
        keys={["value"]}
        indexBy="chemical"
        margin={{ top: 10, right: 10, bottom: 60, left: 60 }} 
        padding={0.2}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "greens" }}
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
          legend: "Value", // Added a legend for the y-axis
          legendPosition: "middle",
          legendOffset: -40, // Adjusted legend offset for compactness
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default BarChart;
