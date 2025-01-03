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

const centimeterInchHTML = document.getElementById("centimeter-inch");
const meterFootHTML = document.getElementById("meter-foot")
const kilometerMileHTML = document.getElementById("kilometer-mile")
const literGallonHTML = document.getElementById("liter-gallon")
const gramOunceHTML = document.getElementById("gram-ounce")
const kilogramPoundHTML = document.getElementById("kilogram-pound")



function valueConverter (metric, imperial, formula, value, HTML) {
    let metricToImperial = Math.round((value * formula)*1000)/1000;
    let imperialToMetric = Math.round((value / formula)*1000)/1000;
    HTML.textContent = `${value} ${metric} = ${metricToImperial} ${imperial}`;
    HTML.innerHTML += "<br>";
    HTML.innerText += `${value} ${imperial} = ${imperialToMetric} ${metric}`;
    
}

convertBtn.addEventListener('click', function() {
    let value = numberInputHTML.value;
    if (!isNaN(value)) {
        valueConverter("centimeter", "inches", 2.54, value, centimeterInchHTML)
        valueConverter("meter", "feet", 3.281, value, meterFootHTML)
        valueConverter("kilometer", "mile", 1.609, value, kilometerMileHTML)
        valueConverter("liters", "gallons", 3.785, value, literGallonHTML)
        valueConverter("gram", "ounces", 0.03527, value, gramOunceHTML)
        valueConverter("kilogram", "pounds", 2.20462, value, kilogramPoundHTML)
    } else {
        console.log("It isn't a number...")
    }
});







