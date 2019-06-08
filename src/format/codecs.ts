import * as t from 'io-ts';

export const Position = t.strict({
    alsia: t.number,
    soom: t.number,
});

export const StringArray = t.readonlyArray(t.string);

export const Board = t.readonlyArray(
    t.readonlyArray(t.union([t.null, t.string])),
);
