const numberInputHTML = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
const myContentP = document.getElementById("check-content-p")

convertBtn.addEventListener

numberInputHTML.addEventListener('input', this.typing)

function typing(e) {
    e.target.setAttribute('size', e.target.value.length);
}


/*
convertBtn.addEventListener('click', function() {
    let test = myContentP.getContext("2d");
    let text = test.measureText("Hello")
    console.log(text)
})
*/
