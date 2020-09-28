import {UPPERCASE_LETTERS} from './constants';
import lowerChar from './lowerChar';
import * as r from "ramda";

export default function (string) {
    // return string.replace(UPPERCASE_LETTERS, lowerChar);
    return r.replace(UPPERCASE_LETTERS, lowerChar, string);
}