

function AmountChange() {
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
}

function YearsChange() {
    document.getElementById("txtYears").value = document.getElementById("rangeYears").value;
}

function RateChange() {
    document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
}

function CalculateClick() {
    // Get loan amount, tenure in years, and interest rate
    var p = parseFloat(document.getElementById("txtAmount").value);
    var n = parseFloat(document.getElementById("txtYears").value) * 12; // Convert years to months
    var r = parseFloat(document.getElementById("txtRate").value) / 12 / 100; // Convert annual rate to monthly

    // Calculate EMI using the formula
    var emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    // Display the result
    document.getElementById("result").innerHTML = "Your monthly installment amount is: <b><span class='text-primary'>&#8377; " + emi.toFixed(2) + "</span></b> for " + p + " in " + (n / 12) + " years";
}

function AmountTextBoxChanged() {
    document.getElementById("rangeAmount").value = document.getElementById("txtAmount").value;
}
function YearsTextBoxChanged() {
    document.getElementById("rangeYears").value = document.getElementById("txtYears").value;
}
function RateTextBoxChanged() {
    document.getElementById("rangeRate").value = document.getElementById("txtRate").value;
}