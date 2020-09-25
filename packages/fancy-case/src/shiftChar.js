export default function (char, offset) {
    return String.fromCharCode(char.charCodeAt(0) + offset);
}