import { ThemeProvider } from "@emotion/react";
import { theme } from '../../styles/Themes';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CopyToClipboardButton from './CopyToClipboardButton';

const ShortLinkOutput = (outputValue) => {
    return (
        <ThemeProvider theme={theme}>
            <TextField
                helperText="Short URL"
                variant="filled"
                margin="normal"
                value={outputValue.outputValue}
                InputProps={{
                    endAdornment: <CopyToClipboardButton input={outputValue.outputValue} />,
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
                sx={{ width: 350 }}
            />

            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </ThemeProvider>
    );
}

export default ShortLinkOutput;