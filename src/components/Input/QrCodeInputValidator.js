const MAX_CHARS_QR_CODE = 2331;

function isValidInput(input) {
    return input.length < MAX_CHARS_QR_CODE;
}

export { isValidInput };