const convertBtn = document.getElementById("convert-btn")
// convertBtn.addEventListener


const numberInputHTML = document.getElementById("number-input")
numberInputHTML.addEventListener('input', this.typing)
function typing(e) {
    e.target.setAttribute('size', e.target.value.length);
    if(!e.target.value) {
        e.target.setAttribute("size", "1");
    }
    
}

const meterFoot = document.getElementById("meter-foot")
const kilometerMile = document.getElementById("kilometer-mile")
const literGallon = document.getElementById("liter-gallon")
const gramOunce = document.getElementById("gram-ounce")
const kilogramPound = document.getElementById("kilogram-pound")


const centimeterInchHTML = document.getElementById("centimeter-inch");
function centimeterInchConverter (value) {
    let formula = 2.54;
    let centToInch = Math.round((value/formula)*1000)/1000;
    let inchToCent = value*formula
    
    centimeterInchHTML.textContent = `${value} centimeters = ${centToInch} inches`
    centimeterInchHTML.innerHTML += "<br>"
    
    centimeterInchHTML.innerText += `${value} inches = ${inchToCent} centimeters`;
}
centimeterInchConverter(20)

/*
convertBtn.addEventListener('click', function() {
let test = myContentP.getContext("2d");
let text = test.measureText("Hello")
console.log(text)
})
*/
