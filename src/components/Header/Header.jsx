import React from 'react'
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from "../../utils/logo.png";
import './Header.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/">
                        <Button>
                            <img src={logo} alt="Logo" style={{
                                height: '50px',
                                width: 'auto',
                                margin: '5px',
                            }} />
                            <Typography variant="h3" sx={{ flexGrow: 1 }} className='hover-logo'>
                                Url Shortener
                            </Typography>
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header
