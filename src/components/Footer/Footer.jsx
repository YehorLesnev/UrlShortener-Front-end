import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box
            bgcolor="primary.main"
            padding={1}
            textAlign="center"
            position="fixed"
            bottom="0"
            width="100%"
        >
            <Typography variant="body1" style={{ fontSize: "14px" }}>
                Designed and developed by Yehor Lesnevych.
            </Typography>

            <Box marginTop={1}>
                {/* Social media links */}
                <IconButton 
                sx={{
                    color: 'text.primary',
                    '&:hover': {
                        backgroundColor: 'background.default',
                        color: 'primary.contrastText',
                    },
                }} 
                href="https://github.com/YehorLesnev" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </IconButton>
                
                <IconButton 
                sx={{
                    color: 'text.primary', 
                '&:hover': {
                    backgroundColor: 'background.default',
                    color: 'primary.contrastText',
                },
            }} 
                href="https://www.linkedin.com/in/yehor-lesnevych-130640158/" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <LinkedInIcon />
                </IconButton>
            </Box>

            <Typography variant="body3" style={{ fontSize: "10px" }}>
                &copy; 2024 Url Shortener. All rights reserved.
            </Typography>

        </Box>
    );
};

export default Footer;
