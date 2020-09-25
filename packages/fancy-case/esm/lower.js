// export const LOWERCASE_LETTERS = /[a-z]/g;
const UPPERCASE_LETTERS = /[A-Z]/g;
const UPPERCASE_OFFSET = 'A'.charCodeAt(0) - 'a'.charCodeAt(0);

function shiftChar (char, offset) {
    return String.fromCharCode(char.charCodeAt(0) + offset);
}

function lowerChar (char) {
    return shiftChar(char, -UPPERCASE_OFFSET);
}

function lower (string) {
    return string.replace(UPPERCASE_LETTERS, lowerChar);
}

export default lower;
