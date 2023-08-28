var celInput = document.getElementById("cel");
var farInput = document.getElementById("far");
var kelInput = document.getElementById("kel");
var clrButton = document.getElementById("clr");

function tempCal() {
    var temp1 = parseFloat(document.getElementById("cel").value);
    var temp2 = parseFloat(document.getElementById("far").value);
    var temp3 = parseFloat(document.getElementById("kel").value);

    if (isNaN(temp1) && isNaN(temp2)) {
        temp1 = temp3 - 273.15;
        temp2 = (temp3 - 273.15) * 9/5 + 32;
        document.getElementById("cel").value = temp1.toFixed(2);
        document.getElementById("far").value = temp2.toFixed(2);
    } 
    else if (isNaN(temp1) && isNaN(temp3)) {
        temp1 = (temp2 - 32) * 5/9;
        temp3 = (temp2 - 32) * 5/9 + 273.15;
        document.getElementById("cel").value = temp1.toFixed(2);
        document.getElementById("kel").value = temp3.toFixed(2);
    }
    else if (isNaN(temp2) && isNaN(temp3)) {
        temp2 = (temp1 * 9/5) + 32;
        temp3 = temp1 + 273.15;
        document.getElementById("far").value = temp2.toFixed(2);
        document.getElementById("kel").value = temp3.toFixed(2);
    }
    else {
        alert("Please enter carefully!");
    }
}

celInput.setAttribute("data-default", celInput.value);
farInput.setAttribute("data-default", farInput.value);
kelInput.setAttribute("data-default", kelInput.value);

function clearValues() {
    celInput.value = celInput.getAttribute("data-default");
    farInput.value = farInput.getAttribute("data-default");
    kelInput.value = kelInput.getAttribute("data-default");
}
clrButton.addEventListener("click", clearValues);
document.getElementById("btn").addEventListener("click", tempCal);
