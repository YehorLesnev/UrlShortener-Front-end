import React from 'react';
import Switch from '@mui/material/Switch';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeSwitch = ({
  isDarkMode,
  setDarkMode
}) => {
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <Switch
      color="default"
      checked={isDarkMode}
      onChange={toggleDarkMode}
      icon={<Brightness7Icon sx={{ color: 'yellow' }} />}
      checkedIcon={<Brightness4Icon sx={{ color: 'black' }} />}
      sx={{
        marginLeft: "auto",
        '& .MuiSwitch-track': {
          backgroundColor: isDarkMode ? '#2E3B4E' : '#cfd8dc',
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: isDarkMode ? '#ffd700' : '#f57c00',
        },
      }}
    />
  );
};

export default ThemeSwitch;
