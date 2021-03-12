module.exports = function reverse (n) {
  let result = String(n);
  result.split('').reverse().join('');
    return result;
}
