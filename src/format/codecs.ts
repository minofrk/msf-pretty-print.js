import {
    union,
    strict,
    readonlyArray,
    null as tNull,
    string as tString,
    number as tNumber,
} from 'io-ts';

export const Position = strict({
    alsia: tNumber,
    soom: tNumber,
});

export const StringArray = readonlyArray(tString);

export const Board = readonlyArray(readonlyArray(union([tNull, tString])));
