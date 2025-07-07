const input_text = document.getElementById("input_text_legth");
const contado = document.getElementById("result");
input_text.addEventListener("input",result)
function result(){
    let palabras = input_text.value.length;
    contado.textContent = "Result: " + palabras;
    }

