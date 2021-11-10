let submit_button = document.getElementById("submit")
submit_button.addEventListener("click", () => {
    let text = document.getElementById("text")
    let number = document.getElementById("number")
    let output = document.getElementById("output")

    let message = text.value
    let quant = number.value


    output.innerHTML = message.repeat(quant);
})