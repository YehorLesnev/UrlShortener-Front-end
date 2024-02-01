import React from "react";
import { Typography } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import { Box } from "@mui/system";

const QrColorSelector = ({
  setBgColor,
  setFgColor,
  bgColor,
  fgColor
}) => {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontSize: "14", margin: 1 }}>Background Color</Typography>
        <MuiColorInput
          sx={{ width: "100%" }}
          value={bgColor}
          onChange={setBgColor}
        />

        <Typography sx={{ fontSize: "14", margin: 1 }}>Foreground Color</Typography>
        <MuiColorInput
          sx={{ width: "100%" }}
          value={fgColor}
          onChange={setFgColor}
        />
      </Box>
    </>
  );
}

export default QrColorSelector;