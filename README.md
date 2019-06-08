@minofrk/msf-pretty-print
===============================================================================

[![NPM Version](https://img.shields.io/npm/v/@minofrk/msf-pretty-print.svg?style=flat-square)](https://www.npmjs.com/package/@minofrk/msf-pretty-print)
[![Build Status](https://img.shields.io/travis/com/minofrk/msf-pretty-print.js/master.svg?style=flat-square)](https://travis-ci.com/minofrk/msf-pretty-print.js)
[![License](https://img.shields.io/github/license/minofrk/msf-pretty-print.js.svg?style=flat-square)](LICENSE)
[![codecov](https://img.shields.io/codecov/c/github/minofrk/msf-pretty-print.js.svg?style=flat-square)](https://codecov.io/gh/minofrk/msf-pretty-print.js)

[MSF 形式](https://github.com/minofrk/mino-seslax-format)の pretty-print をするライブラリです。

```typescript
msfPrettyPrint(state);
/*
{
  "sast": "sorn",
  "arxe": {
    "txifol": ["lin", "len", "mat", "rez", "pin", "ket"],
    "evol": null
  },
  "sorn": {
    "txifol": ["vio", "fav", "mik", "lis", "mel"],
    "evol": null
  },
  "ele": [
    [ null,  null,  null,  null,  null,  null,  null],
    ["rav",  null,  null, "mir",  null, "jil", "tan"],
    [ null,  null,  null,  null, "tem",  null, "nen"],
    ["din", "dia",  null,  null,  null,  null,  null],
    [ null,  null,  null, "zan", "gil",  null,  null],
    ["pal",  null, "ful",  null,  null,  null, "ruj"],
    [ null, "dyu",  null, "ser",  null,  null, "ral"]
  ],
  "korol": ["ruj"]
}
*/
```

Install
-------------------------------------------------------------------------------

    npm install @minofrk/msf-pretty-print

Usage
-------------------------------------------------------------------------------

```typescript
import msfPrettyPrint from '@minofrk/msf-pretty-print';

msfPrettyPrint(/* State | Move | MSFType */);
```

License
-------------------------------------------------------------------------------

See [LICENSE](LICENSE)
