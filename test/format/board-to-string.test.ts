import board from '../../src/format/board-to-string';
import { indentString } from '../../src/constants';

test.each<[(null | string)[][], string]>([
    [
        [['aaa', 'bbb', 'ccc'], [null, 'ddd', null]],
        `[
${indentString}["aaa", "bbb", "ccc"],
${indentString}[ null, "ddd",  null]
]`,
    ],
])('format/board-to-string (%#)', (input, expected): void => {
    expect(board(input)).toBe(expected);
});
