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

    );
}

export default ShortLinkOutput;