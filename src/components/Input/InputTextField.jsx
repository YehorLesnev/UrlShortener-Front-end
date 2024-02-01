import React from 'react';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';

function InputTextField({
    title,
    inputValue,
    handleInputChange
}) {
    return (
        <>
            <Typography variant="h5" color="black" margin={3}>
                {title}
            </Typography>

            <TextField
                label="Enter or drop URL"
                variant="outlined"
                value={inputValue}
                onChange={handleInputChange}
                InputProps={{
                    sx: {
                        color: 'text.primary',
                    },
                }}
                InputLabelProps={{
                    sx: {
                        color: 'text.secondary',
                    },
                }}
                sx={{ 
                    width: 350,
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
            />
        </>
    );
}

export default InputTextField;