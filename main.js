function calculate(...args) {
  let stack = [];

  args.forEach((arg) => {
    if (parseInt(arg)) {
      stack.push(arg);
    } else {
      const rhs = stack.pop();
      const lhs = stack.pop();

      switch (arg) {
        case '+':
          stack.push(rhs + lhs);
          break;
        case '-':
          stack.push(rhs - lhs);
          break;
        case '*':
          stack.push(rhs * lhs);
          break;
        case '/':
          stack.push(rhs / lhs);
          break;
        case '%':
          stack.push(rhs % lhs);
          break;
      }
    }
  });

  return stack.pop();
}

module.exports = calculate;

