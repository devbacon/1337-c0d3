/**
 * Write a function argumentsLength that returns the count of arguments passed to it.
 *
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  // lesson to myself from prev day 8 problem
  // use the OG for loop more
  let count = 0;

  for (let i = args.length; i > 0; i--) {
    count++;
  }

  return count;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
