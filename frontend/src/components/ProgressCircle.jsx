import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ airQualityScore = 87, size = 40 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Calculate the progress based on the air quality score (assuming a range of 0-100)
  const progress = airQualityScore / 100;
  const angle = progress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
