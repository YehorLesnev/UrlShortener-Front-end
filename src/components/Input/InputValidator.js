import { maxTextLength } from "../../Settings/appSettings";

const isValidInput = (input) => {
    return input.length < maxTextLength;
}

const isValidUrl = (input) => {
    try {
        let url = new URL(input);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (err) {
        return false;
    }
}

export { isValidUrl, isValidInput };