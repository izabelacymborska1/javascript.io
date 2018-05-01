'use strict';
//
////zakładam warunek brzegowy
//

//
//
//var currentValue = 1;
//var previousValue = 1;
//
//function finabonacci(index) {
//
//      for (var i = 0; i < index; i++) {
//            for (var i = 2; i < index; i++) {
//    
//    if(index === 1 || index === 2) {
//        console.log(1);
//        return 1;
//        
//      
//                
//                var temp = currentValue;
//                var currentValue = currentValue + previousValue;
//                var previousValue = temp;
//            }
//        }
//    }
//}
//    console.log(currentValue);



function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

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






//
//
//var a = 0, b = 1, f = 1;
//function finabonacci(n) {
//    
//    for(var i = 2; i <= n; i++) {
//        f = a + b;
//        a = b;
//        b = f;
//    }
//    return f;
//};
//
//console.log(n);


//
//
//function fibonacci(n) {
//  if (n <= 1) return 1;
//
//  return fibonacci(n - 1) + fibonacci(n - 2);
//}
//


