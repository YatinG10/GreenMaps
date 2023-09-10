import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";

const data = [
  {
    id: "line",
    data: [
      { x: 0, y: 90 },
      { x: 1, y: 86 },
      { x: 2, y: 76 },
      { x: 3, y: 81 },
      { x: 4, y: 70 },
      { x: 5, y: 84 },
      { x: 6, y: 74 },
      { x: 7, y: 79 },
    ],
  },
];

const LineChart = () => {
  const theme = useTheme();

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.grey[100],
            },
          },
          legend: {
            text: {
              fill: theme.palette.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: theme.palette.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.grey[100],
          },
        },
        tooltip: {
          container: {
            color: theme.palette.primary[500],
          },
        },
      }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "linear", min: 0, max: "auto" }}
      yScale={{ type: "linear", min: 0, max: "auto" }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: "X Axis", // You can customize the legend text here
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Y Axis", // You can customize the legend text here
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
