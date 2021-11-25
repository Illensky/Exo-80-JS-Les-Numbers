/*1*/
let valueIsInteger = document.querySelector("#is-integer");

/*2*/
let valueIsNan = document.querySelector("#is-nan");

/*3*/
let valueParseFloat = document.querySelector("#parse-float");
let newValueParseFloat = parseFloat(valueParseFloat.innerHTML)*26;

/*4*/
let valueParseInt = document.querySelector("#parse-int");
let newValueParseInt = parseInt(valueParseInt.innerHTML)*26;

/*5*/
let valueToFixed = document.querySelector("#to-fixed");




/*1*/
if (Number.isInteger(valueIsInteger)) {
    valueIsInteger.innerHTML += " est un nombre entier";
}
else {
    valueIsInteger.innerHTML += " N'est pas un nombre entier";
}

/*2*/
if (Number.isNaN(valueIsNan)) {
    valueIsNan.innerHTML += " est un nombre";
}
else {
    valueIsNan.innerHTML += " est NaN (Not a Number)";
}

/*3*/
valueParseFloat.innerHTML += " " + newValueParseFloat.toString();

/*4*/
valueParseInt.innerHTML += " " + newValueParseInt;

/*5*/
valueToFixed.innerHTML = parseFloat(valueToFixed.innerHTML).toFixed(2);
