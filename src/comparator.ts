const orderedKeys: readonly string[] = [
    'est',

    'sast',
    'arxe',
    'sorn',
    'ele',
    'korol',

    'txifol',

    'pit',
    'luul',
    'ka',
    'evol',

    'i',
    'a',
    'alsia',
    'soom',

    'ito',
    'vastan',

    'aptex',
    'fixt',
    'kit',
    'seslax',

    'fala',
    'ov',
    'slax',
    'im',
    'oprens',
    'mit',

    'ladan',
    'kalte',
    'evita',
];

const comparator = (x: string, y: string): -1 | 1 => {
    const xIndex = orderedKeys.indexOf(x);
    const yIndex = orderedKeys.indexOf(y);

    if (xIndex !== -1 && yIndex !== -1) {
        return xIndex < yIndex ? -1 : 1;
    }

    if (xIndex !== -1 && yIndex === -1) {
        return -1;
    }

    if (xIndex === -1 && yIndex !== -1) {
        return 1;
    }

    return x < y ? -1 : 1;
};

export default comparator;
