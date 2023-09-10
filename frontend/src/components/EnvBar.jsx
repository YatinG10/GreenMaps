import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const EnvBar = () => {
  // Data
  const data = [
    {
      chemical: "Car",
      value: 87,
    },
    {
      chemical: "Transit",
      value: 90,
    },
    {
      chemical: "Bike",
      value: 61,
    },
    {
      chemical: "Walk",
      value: 49,
    }

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

export default EnvBar;
