# ehou
西暦に応じた恵方を取得することができるライブラリ

[![npm version](https://badge.fury.io/js/ehou.svg)](https://badge.fury.io/js/ehou)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Installation

```sh
$ npm install --save ehou
# OR
$ yarn add ehou
```

## Usage

### Node.js

```ts
// Create an instance
// Year props is optional.
const year = 2022
const ehou = new Ehou(year);

// output

// Current Year
console.log(ehou.current);

// Last Year
console.log(ehou.last);

// Next Year
console.log(ehou.last);
```

## Output

### Sample
```ts
Ehou: {
  ehou: {
    direction: {
      azimuth: 345,
      text: "北北西"
    },
    hira: "みずのえ",
    kana: "ミズノエ",
    lastDigitOfTheYear: 2,
    name: "壬",
    romaji: "mizunoe",
  },
  year: 2022
}

```

### Type
```ts
{
  ehou: {
    name: string;
    hira: string;
    kana: string;
    romaji: string;
    direction: {
      text: string;
      azimuth: number;
    }
    lastDigitOfTheYear: number;
  }[];
  year: number;
};
```

### Detail

|         key          |    detail     |   type   |
| -------------------- | ------------- | -------- |
| `name`               | 年の十干      | `string` |
| `hira`               | ひらがな表記  | `string` |
| `kana`               | カタカナ表記  | `string` |
| `romaji`             | ローマ字表記  | `string` |
| `direction`          | 恵方情報      | `object` |
| `text`               | 16方位        | `string` |
| `azimuth`            | 方位角        | `number` |
| `lastDigitOfTheYear` | 西暦年の1の位 | `number` |
| `year`               | 西暦(4桁)     | `number` |

## Links

- https://tools.m-bsys.com/original_tools/ehou.php
- https://kotobank.jp/word/%E6%81%B5%E6%96%B9-37340
