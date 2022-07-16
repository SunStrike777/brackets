module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brackets = Object.fromEntries(bracketsConfig);

  for (i = 0; i < str.length; i++) {
    if (stack.length === 0) {
      stack.push(str[i]);
    } else {
      if (str[i] == brackets[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
    console.log(stack);
  }
  return stack.length > 0 ? false : true;
};
