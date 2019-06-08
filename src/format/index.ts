import { Option, some, none } from 'fp-ts/lib/Option';
import { Position, StringArray, Board } from './codecs';
import boardToString from './board-to-string';

export default function format(key: string, value: unknown): Option<string> {
    if (typeof value === 'string' && /^\$\d+$/.test(value)) {
        return some(value);
    }

    if (key === 'ele' && Board.is(value)) {
        return some(boardToString(value));
    }

    if (
        (key === 'i' || key === 'a') &&
        Position.is(value) &&
        Object.keys(value).length === 2
    ) {
        return some(`{ "alsia": ${value.alsia}, "soom": ${value.soom} }`);
    }

    if ((key === 'txifol' || key === 'korol') && StringArray.is(value)) {
        return some(
            '[' + value.map((x): string => JSON.stringify(x)).join(', ') + ']',
        );
    }

    return none;
}
