import { indentString } from '../constants';

function cellToString(cell: null | string): string {
    return cell ? `"${cell}"` : ' null';
}

function rowToString(row: readonly (null | string)[]): string {
    return indentString + '[' + row.map(cellToString).join(', ') + ']';
}

export default function boardToString(
    board: readonly (readonly (null | string)[])[],
): string {
    return '[\n' + board.map(rowToString).join(',\n') + '\n]';
}
