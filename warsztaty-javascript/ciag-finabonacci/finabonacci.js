'use strict';

//ciag Fibonacciego
// używam fincji if --- else, opierając się na pierszych 2 kolejnych liczbach w ciągu, 1,1
//n to n-ta wartośc parametru ciągu

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}


//drukuję wyniki w konsoli

console.log('Wyniki obliczeń kolejnych 10-ciu liczb ciągu Fibonacciego to:')
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));





