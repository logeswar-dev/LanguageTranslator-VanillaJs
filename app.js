var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");

function clickEventHandler(){
    console.log("input " + textInput.value);
    console.log("Clicked")
}

buttonTranslate.addEventListener("click", clickEventHandler)