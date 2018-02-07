function fibo ()
{
  var x = 2;
  var y = 1;
  var sum = 2;
  var n = 0;
  
  while (n < 4000000)
    {
      n = x + y;
      y = x;
      x = n;
      if (!(n % 2))
        {
          sum += n;
        }
    }
  return sum;
}
console.log(fibo());
