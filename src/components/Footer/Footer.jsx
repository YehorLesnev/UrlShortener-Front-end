import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../styles/Themes';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                bgcolor="primary.main" // Change the background color as needed
                // color="white" // Change the text color as needed
                padding={2}
                textAlign="center"
                position="fixed"
                bottom="0"
                width="100%"
            >
                <Typography variant="body1">
                    Designed and developed by Yehor Lesnevych.
                </Typography>

                <Box marginTop={1}>
                    {/* Social media links */}
                    <IconButton href="https://github.com/YehorLesnev" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/yehor-lesnevych-130640158/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon/>
                    </IconButton>
                </Box>

                <Typography variant="body3">
                    &copy; 2024 Url Shortener. All rights reserved.
                </Typography>

            </Box>
        </ThemeProvider>
    );
};

export default Footer;
