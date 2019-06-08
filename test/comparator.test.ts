import comparator from '../src/comparator';

test.each([
    [
        [
            'im',
            'imet',
            'sast',
            'aptex',
            'ele',
            'evol',
            'artan',
            'oprens',
            'seslax',
        ],
        [
            'sast',
            'ele',
            'evol',
            'aptex',
            'seslax',
            'im',
            'oprens',
            'artan',
            'imet',
        ],
    ],
])(
    'comparator (%#)',
    (input, expected): void => {
        expect([...input].sort(comparator)).toStrictEqual(expected);
    },
);
