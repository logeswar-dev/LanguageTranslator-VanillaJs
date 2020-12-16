var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#output")

function clickEventHandler(){
    textOutput.innerHTML = "Translatting Text..." + textInput.value;
}

buttonTranslate.addEventListener("click", clickEventHandler)