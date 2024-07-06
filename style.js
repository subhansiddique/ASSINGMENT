var input = document.getElementById("input");
var result = document.getElementById("result");



function checkNumber() {
    if (input.value == "") {
        // alert("Please enter a number");
        result.innerHTML = "Please enter a number";
        return;
    // }else if (isNaN(input.value)) {
    //     alert("Please enter a number");
    //     return;
    }else {

        var sum = input.value % 2;
        var sum2 = input.value % 5;
        var sum3 = input.value % 10;
        if (sum == 1 && sum2 !== 0 && sum3 !== 0) {
           result.innerHTML = "The Number is ODD";
        }else if (sum == 0 && sum2 !== 0 && sum3 !== 0) {
            result.innerHTML = "The Number is EVEN"
    }else if (sum2 == 0 && sum3 !== 0) {
       result.innerHTML ="The Number is FIVE"
    }else {
       result.innerHTML = "The Number is ZEERO"
    }
    input.value = "";
}
}


