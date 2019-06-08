import stringify from 'json-stable-stringify';
import { indentString } from './constants';
import format from './format';
import comparator from './comparator';

export default function msfPrettyPrint(source: unknown): string {
    const replacements: string[] = [];

    const replacer: stringify.Replacer = (key, value: unknown): unknown => {
        const product = format(key, value);

        if (product.isNone()) return value;

        replacements.push(product.value);
        return '$' + (replacements.length - 1);
    };

    const options: stringify.Options = {
        replacer,
        space: indentString,
        cmp: (x, y): number => comparator(x.key, y.key),
    };

    return stringify(source, options).replace(
        /^(\s*)(".*?": )"\$(\d+)"(,?)$/gm,
        (...$): string => {
            const item = $[2] + replacements[Number($[3])] + $[4];
            return item.replace(/^/gm, $[1]);
        },
    );
}
