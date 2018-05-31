# Ellipsis-Format
[![Build Status](https://travis-ci.org/Danwakeem/ellipsis-format.svg?branch=master)](https://travis-ci.org/Danwakeem/ellipsis-format)
[![Coverage Status](https://coveralls.io/repos/github/Danwakeem/ellipsis-format/badge.svg?branch=master)](https://coveralls.io/github/Danwakeem/ellipsis-format?branch=master)


Have you seen master of none? You know the title sequence where it has the names with all of those ... in it? I thought it would be cool if there was an npm package that looked like that. (I am sure it already exists but I couldn't find it.)

## Installation
```
npm i ellipsis-format --save
```

## Useage
```

const ellipsisFormat = require('ellipsis-format');
ellipsisFormat(params);
```

## Param values

* `input` - *[[String], [String]]* - 2D array with the following format [[String, String]]
* `min` - *Number* - Minimum number of '.'s between the two strings

## Example output
```

const ellipsisFormat = require('ellipsis-format');
const output = ellipsisFormat({
  min: 30,
  input: [
    ['Hello','Man'],
    ['Photographer','Danwakeem'],
    ['Softare','NPM Pack'],
    ['Errors','10'],
  ]
});

/*
  output

  Hello......................Man
  Photographer.........Danwakeem
  Softare...............NPM Pack
  Errors......................10

 */
```