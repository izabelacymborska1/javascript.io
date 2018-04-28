'use strict';


// tu jeszcze z 16:40 - odkliknięcie zgód - lastcheckbox



submitButton.addEventListener("click", validateForm);
function validateForm(e) {
    
    var textInputs = document.querySelectorAll('input[type=text]');
    for(var i = 0; i< textInputs.length; i++) {
       if (textInputs[i].value.trim().length = 0) {
        e.preventDefault();
        var warning = document.createElement('p');
        warning.id ="alert-" +i;
        warning.innerText ="To pole jest wymagane";
        textInputs[i].nextSibling= warning;
    }else {
        var nextElement.id = textInputs[i].nextElementSibling;
        if(nextElement.id === "alert-" + i) {
            nextElement.parentElement.removeChild(nextElement);
        }
    }
}

if (allCheckboxes[0].checked === false) {
    e.preventDefault();
    
}



//rozwiązanie wg instruktora

var submitButton = document.getElementById('wyslij');
submitButton.onclick = function (e){
e.preventDefault();

validateFormFileds();
}
function validateFormFileds() {

    var nameTextBox = document.getElementById("name");
    var emailTextBox = document.getElementById("email");
var marketingAcceptanceBox = document.getElementById("zgoda-marketingowa-1");

    if (nameTextBox.value.trim().length<= 0) {
        insertErrorMessage("Nie wpisano imienia !", nameTextBox);

    }

    if (emailTextBox.value.trim().length<= 0) {
        insertErrorMessage("Nie wpisano emaila!", emailTextBox);
    }
    
    if(!marketingAcceptanceBox.checked) {
        insertErrorMessage("Zgoda marketingowa musi być zaznaczona!", marketingAcceptanceBox; 
    }
    
}



function insertErrorMessage(errorMessage, inputElement) {
    var errorMessageElement = document.createElement('p')

    errorMessageElement.style.color = "red";
    errorMessageElement.innerHTML = errorMessage;

    insertAfter(errorMessageElement, inputElement);
}

function insertAfter(newNode, ReferenceNode) {
    ReferenceNode.parentElement.insertBefore(newNode, ReferenceNode.nextSibling);


}

// tu jszcze kolory z telefonu z godziny 16:28
        
        
        