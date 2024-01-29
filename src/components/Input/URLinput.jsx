import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../styles/Themes';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const URLinput = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
                style={{ minHeight: "100vh" }}
                spacing={5}
            >
                <Grid item>
                    <Typography variant="h5" color="black">
                        Shorten your URL
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Enter URL" variant="outlined" />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default URLinput;