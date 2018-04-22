'use strict';

var imiona = ['Monika','Krystian','Łukasz'];
imiona [3] = 'Tania';
imiona [2] = 'Ela';



imiona.push('Geralt');
console.log(imiona);

imiona.pop();
imiona.pop();
console.log(imiona);


console.log(imiona.unshift('Robert'));
console.log(imiona);


console.log(imiona.shift());
console.log(imiona);

console.log(imiona.length);


console.log(imiona.join(" ;) "));
            
console.log(imiona.reverse());

var liczby = ["dwa", "trzy", "zero"];
console.log(liczby.sort());


var liczby = ["dwa", "trzy", "zero"];
console.log(liczby.sort().reverse());


        