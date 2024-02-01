import TextField from '@mui/material/TextField';
import CopyToClipboardButton from './CopyToClipboardButton';

const ShortLinkOutput = (outputValue) => {
    return (

        <TextField
            helperText="Short URL"
            variant="filled"
            margin="normal"
            value={outputValue.outputValue}
            InputProps={{
                endAdornment: <CopyToClipboardButton input={outputValue.outputValue} />,
                readOnly: true,
                style: {
                    color: 'black',
                },
            }}
            InputLabelProps={{
                style: {
                    color: 'text.secondary',
                },
            }}
            sx={{
                width: 350,
                color: 'text.secondary',
                "& .MuiFilledInput-underline:after": {
                    borderBottomColor: "red",
                },
                "& .MuiFilledInput-root": {
                    backgroundColor: "text.dark",
                },
                "& .MuiFilledInput-root:hover": {
                    backgroundColor: "text.dark",
                },
            }}
        />

    );
}

export default ShortLinkOutput;