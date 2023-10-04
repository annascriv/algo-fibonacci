function fibonacci(num) {
  let fibs = [0,1];

  if (num==0) {
    return 0;
  }
  if (num==1) {
    return 1;
   }
  

  for (let i=2;i<=num;i++) {
   // fibs[i] = fibs[i-2]+fibs[i-1];
    fibs.push(fibs[i-2]+fibs[i-1]);

  }
  console.log(fibs)
  return fibs[num];
}
console.log(fibonacci(11))
module.exports = fibonacci;
