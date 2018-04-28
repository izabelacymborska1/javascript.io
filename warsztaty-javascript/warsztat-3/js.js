'use srtict';

//zadanie 2 pobierz imie 4 zjadz

//funkcja która działa na całej stronie
var submitButtons = document.querySelectorAll("input[type=submit]");

submitButtons.forEach(addOnClickToSubmitButtons);

function addOnClickToSubmitButtons(button) {
    'use strict';
    button.onclick = logInputsInSubmitButtonsForm;
}

function logInputsInSubmitButtonsForm(e) {
    e.preventDefault();
    var inputs = e.currentTarget.parentElement.getElementsByTagName("input");

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "input") {
            continue;
        }
        console.log(inputs[i].name + ": " + inputs[i].value);
    }
}
