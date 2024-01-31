import React from 'react';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';

function InputTextField({
    inputValue,
    handleInputChange
}) {
    return (
        <>
            <Typography variant="h5" color="black" margin={3}>
                Shorten your URL
            </Typography>

            <TextField
                label="Enter or drop URL"
                variant="outlined"
                value={inputValue}
                onChange={handleInputChange}
                InputProps={{
                    style: {
                        color: '#393c47',
                    },
                }}
                InputLabelProps={{
                    style: {
                        color: '#393c47',
                    },
                }}
                sx={{ width: 350 }}
            />
        </>
    );
}

export default InputTextField;