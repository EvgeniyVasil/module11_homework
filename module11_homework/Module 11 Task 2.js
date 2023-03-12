function primeNumberSearch(num){
  if ((num < 2) || (num > 1000)) {
      return "Entered value is incorrect";
  } else {
      for (let i = 2; i < num; i++){
          if (num % i === 0) {
              return false;
          }
      }
      return true;
  }
}

let enterNum = Math.floor(Math.random() * 1500);
let x = primeNumberSearch(enterNum);
console.log("Number " + enterNum + ' is Prime = ' + x);