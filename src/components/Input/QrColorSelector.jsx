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
      <Box display="flex" flexDirection="column" alignItems="center" marginLeft={3}>
        <Typography sx={{ fontSize: "14", margin: 1 }}>Background Color</Typography>
        <MuiColorInput
          sx={{
            width: "100%",
            color: 'text.primary',
            "& label.Mui-focused": {
              color: "text.secondary",
            },
            "& .MuiOutlinedInput-root": {
              fieldset: {
                borderColor: "text.primary",
              },
              "&.Mui-focused fieldset": {
                borderColor: "text.secondary",
              },
            }
          }}
          value={bgColor}
          onChange={setBgColor}
        />

        <Typography sx={{ fontSize: "14", margin: 1 }}>Foreground Color</Typography>
        <MuiColorInput
          sx={{
            width: "100%",
            color: 'text.primary',
            "& label.Mui-focused": {
              color: "text.secondary",
            },
            "& .MuiOutlinedInput-root": {
              fieldset: {
                borderColor: "text.primary",
              },
              "&.Mui-focused fieldset": {
                borderColor: "text.secondary",
              },
            }
          }}
          value={fgColor}
          onChange={setFgColor}
        />
      </Box>
    </>
  );
}

export default QrColorSelector;