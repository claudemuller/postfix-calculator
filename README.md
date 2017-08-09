# Postfix Calculator

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
