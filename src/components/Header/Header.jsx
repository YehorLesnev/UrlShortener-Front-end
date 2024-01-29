import React from 'react'
import { theme } from '../../styles/Themes';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider } from '@mui/material/styles';
import logo from "../../utils/logo.png";
import './Header.css'
import { Button } from '@mui/material';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                 
                            <Button>
                                <img src={logo} alt="Logo" style={{
                                    height: '50px',
                                    width: 'auto',
                                    margin: '5px'
                                }} />
                        <Typography variant="h3" sx={{ flexGrow: 1 }} className='hover-logo'>
                            Url Shortener
                        </Typography>
                            </Button>

                       
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
}

export default Header
