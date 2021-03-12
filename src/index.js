module.exports = function reverse (n) 
{
  let tmp = String(n).split('');
  let result = [];
  for(let i=tmp.length-1;i>=0;i--)
    {
      result.push(tmp[i]);
    }
    result = result.join('');
    return result;
}
