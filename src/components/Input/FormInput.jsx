import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../styles/Themes';

const FormInput = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        console.log('Submitted value:', inputValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <ThemeProvider theme={theme}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    padding={2}
                    marginTop={5}
                >
                    <Typography variant="h5" color="black" margin={3}>
                        Shorten your URL
                    </Typography>

                    <TextField
                        label="Enter URL"
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
                    />

                    <TextField
                        helperText="Short URL"
                        variant="filled"
                        margin="normal"
                        value={inputValue}
                        InputProps={{
                            readOnly: true,
                            style: {
                                color: '#393c47',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#393c47',
                            },
                        }}
                    />

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
            </ThemeProvider>
        </form>
    );
};

export default FormInput;