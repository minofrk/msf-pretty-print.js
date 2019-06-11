import format from '../../src/format';
import { Option, some, none } from 'fp-ts/lib/Option';

test.each<[string, unknown, Option<string>]>([
    ['', '$0', some('$0')],
    ['', '$34', some('$34')],
    ['', '3', none],
    ['', 3, none],
    ['', '"5"', none],

    ['i', { alsia: 0, soom: 6 }, some('{ "alsia": 0, "soom": 6 }')],
    ['a', { alsia: 3, soom: 1 }, some('{ "alsia": 3, "soom": 1 }')],
    ['asdf', { alsia: 0, soom: 6 }, none],
    ['a', { alsia: 3, soom: 1, asdf: 7 }, none],

    ['txifol', ['a', 'b', 'c', 'd'], some('["a", "b", "c", "d"]')],
    ['korol', ['a', 'b', 'c', 'd'], some('["a", "b", "c", "d"]')],
    ['asdf', ['a', 'b', 'c', 'd'], none],
    ['txifol', [1, 2, 3], none],
])('format (%#)', (key, value, expected): void => {
    expect(format(key, value)).toStrictEqual(expected);
});
