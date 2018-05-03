'use strict';

var expression;


/* Funkcja dodająca wartość do inputa */

function getValueOnPress(elementValue){
    document.getElementById('expression').value += elementValue ;
    
}

/*Funkcja pobierająca dane z inputa */

function getExp(event) {
    event.preventDefault();
    expression = document.getElementById('expression').value;
    calculate(expression);
}

/* Funkcja wyświetlająca wynik na stronie */

function showResult(res) {
    var p = document.createElement('p');
    p.innerHTML = res;
    document.getElementById('kontener').appendChild(p);
}

/* Funkcja wyliczająca wartość wyrażenia */

function calculate(exp) {
    var pattern = /[a-zA-Z]/;
    var result;
    try {
        if (pattern.test(exp)) throw new Error(expression + "  <-- Wpisałeś przynajmniej jedną literę!\n");
        else {
            result = eval(exp);
            if (result === Infinity || result === -Infinity ) throw new Error(expression + "  <-- Pamiętaj cholera nie dziel przez zero!")
            document.getElementById('expression').value = result ;
           /* showResult(exp + ' = ' + result);*/
        }
    } catch (e) {
      document.getElementById('expression').value = e.message ;
        showResult(e.message);
    }
}

/* Funkcja czyszcząca pola */

function clearField(event){
    document.getElementById('expression').value = " ";
}


