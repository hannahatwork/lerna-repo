import {UPPERCASE_OFFSET} from './constants';
import shiftChar from './shiftChar';

export default function (char) {
    return shiftChar(char, -UPPERCASE_OFFSET);
}