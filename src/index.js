module.exports = function reverse (n) 
{
  let result = n.toString().split('').reverse().join('').toNumber();
    return result;
}
