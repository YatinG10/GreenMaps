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
    },
  ];

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <ResponsiveBar
        data={data}
        keys={["value"]}
        indexBy="chemical"
        margin={{ top: 10, right: 30, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "greens"}}
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
        labelFormat={(value) => `${value}`}
        enableLabel={true}
        labelSkipWidth={12} 
        labelSkipHeight={12} 
        labelTextColor={{ from: "#000000", modifiers: [["darker", 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default EnvBar;
