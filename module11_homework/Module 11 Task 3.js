function funcSum(x) {
    return function(y) {
      return x + y;
    }
  }
  
  const firstFunc = funcSum(101);
  let secFunc = firstFunc(329);
  
  console.log(secFunc);