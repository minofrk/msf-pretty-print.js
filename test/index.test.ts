import msfPrettyPrint from '../src';
import * as fs from 'fs';
import * as path from 'path';

const fixturesDir = path.resolve(__dirname, 'fixtures');
const fixtureNames = fs.readdirSync(fixturesDir).sort();

describe('msfPrettyPrint', (): void => {
    test.each(fixtureNames.map((x): [string] => [x]))('%s', (name): void => {
        const fixture = fs
            .readFileSync(path.resolve(fixturesDir, name))
            .toString();

        const input = JSON.parse(fixture);
        const output = msfPrettyPrint(input);

        expect(JSON.parse(output)).toStrictEqual(input);
        expect(output).toMatchSnapshot();
    });
});
