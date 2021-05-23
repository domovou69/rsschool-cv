function clearData() {
    document.getElementById("input-equation").value = "";
}

function deleteData() {
    document.getElementById("input-equation").value = document.getElementById("input-equation").value.toString().slice(0, -1);
}

function insert(element) {

    var last = document.getElementById("input-equation").value.toString().slice(-1);
    let operatorsArr = ["/", "*", "+", "-", "^", "."];

    if (operatorsArr.includes(element) && operatorsArr.includes(last)) {
        deleteData();
        document.getElementById("input-equation").value += element;
    }
    else {
        document.getElementById("input-equation").value += element;
    }

}


function mathSqrt() {
    document.getElementById("input-equation").value = Math.sqrt(document.getElementById("input-equation").value);
}
