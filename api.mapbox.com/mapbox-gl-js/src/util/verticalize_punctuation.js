// @flow

import {
    charHasRotatedVerticalOrientation,
} from './script_detection';

export const verticalizedCharacterMap = {
    '!': 'ï¸',
    '#': 'ï¼',
    '$': 'ï¼',
    '%': 'ï¼',
    '&': 'ï¼',
    '(': 'ï¸µ',
    ')': 'ï¸¶',
    '*': 'ï¼',
    '+': 'ï¼',
    ',': 'ï¸',
    '-': 'ï¸²',
    '.': 'ã»',
    '/': 'ï¼',
    ':': 'ï¸',
    ';': 'ï¸',
    '<': 'ï¸¿',
    '=': 'ï¼',
    '>': 'ï¹',
    '?': 'ï¸',
    '@': 'ï¼ ',
    '[': 'ï¹',
    '\\': 'ï¼¼',
    ']': 'ï¹',
    '^': 'ï¼¾',
    '_': 'ï¸³',
    '`': 'ï½',
    '{': 'ï¸·',
    '|': 'â',
    '}': 'ï¸¸',
    '~': 'ï½',
    'Â¢': 'ï¿ ',
    'Â£': 'ï¿¡',
    'Â¥': 'ï¿¥',
    'Â¦': 'ï¿¤',
    'Â¬': 'ï¿¢',
    'Â¯': 'ï¿£',
    'â': 'ï¸²',
    'â': 'ï¸±',
    'â': 'ï¹',
    'â': 'ï¹',
    'â': 'ï¹',
    'â': 'ï¹',
    'â¦': 'ï¸',
    'â§': 'ã»',
    'â©': 'ï¿¦',
    'ã': 'ï¸',
    'ã': 'ï¸',
    'ã': 'ï¸¿',
    'ã': 'ï¹',
    'ã': 'ï¸½',
    'ã': 'ï¸¾',
    'ã': 'ï¹',
    'ã': 'ï¹',
    'ã': 'ï¹',
    'ã': 'ï¹',
    'ã': 'ï¸»',
    'ã': 'ï¸¼',
    'ã': 'ï¸¹',
    'ã': 'ï¸º',
    'ã': 'ï¸',
    'ã': 'ï¸',
    'ï¼': 'ï¸',
    'ï¼': 'ï¸µ',
    'ï¼': 'ï¸¶',
    'ï¼': 'ï¸',
    'ï¼': 'ï¸²',
    'ï¼': 'ã»',
    'ï¼': 'ï¸',
    'ï¼': 'ï¸',
    'ï¼': 'ï¸¿',
    'ï¼': 'ï¹',
    'ï¼': 'ï¸',
    'ï¼»': 'ï¹',
    'ï¼½': 'ï¹',
    'ï¼¿': 'ï¸³',
    'ï½': 'ï¸·',
    'ï½': 'â',
    'ï½': 'ï¸¸',
    'ï½': 'ï¸µ',
    'ï½ ': 'ï¸¶',
    'ï½¡': 'ï¸',
    'ï½¢': 'ï¹',
    'ï½£': 'ï¹'
};

export default function verticalizePunctuation(input: string) {
    let output = '';

    for (let i = 0; i < input.length; i++) {
        const nextCharCode = input.charCodeAt(i + 1) || null;
        const prevCharCode = input.charCodeAt(i - 1) || null;

        const canReplacePunctuation = (
            (!nextCharCode || !charHasRotatedVerticalOrientation(nextCharCode) || verticalizedCharacterMap[input[i + 1]]) &&
            (!prevCharCode || !charHasRotatedVerticalOrientation(prevCharCode) || verticalizedCharacterMap[input[i - 1]])
        );

        if (canReplacePunctuation && verticalizedCharacterMap[input[i]]) {
            output += verticalizedCharacterMap[input[i]];
        } else {
            output += input[i];
        }
    }

    return output;
}