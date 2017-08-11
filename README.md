# Postfix Calculator [![Build Status](https://travis-ci.org/claudemuller/postfix-calculator.svg?branch=master)](https://travis-ci.org/claudemuller/postfix-calculator) [![Coverage Status](https://coveralls.io/repos/github/claudemuller/postfix-calculator/badge.svg?branch=master)](https://coveralls.io/github/claudemuller/postfix-calculator?branch=master)

  A postfix/[reverse polish notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation) calculator implemented in JavaScript

## Installation

  `npm install @claudemuller/postfix-calculator`

## Usage

   ```
   const calculate = require('@claudemuller/postfix-calculator');

   var result = calculate(5, 6, 7, '*', '+', 1, '-');
   ```
  Output should be `46`

## Tests

  `npm test`
