// Main JavaScript Starts Here
// First Class Ticket Counter Function
document.getElementById("firstClassPlus").addEventListener("click", function(){
    updateInputValue(true, "firstClassInput");
})
document.getElementById("firstClassMinus").addEventListener("click", function(){
    updateInputValue(false, "firstClassInput");
})


// Economy Ticket Counter Function
document.getElementById("economyPlus").addEventListener("click", function(){
    updateInputValue(true, "economyClassInput");
})
document.getElementById("economyMinus").addEventListener("click", function(){
    updateInputValue(false, "economyClassInput");
})


// Button press capturing Function
function updateInputValue(doIncrease, inputClass){
    const inputValue = document.getElementById(inputClass);
    const inputCount = parseFloat(inputValue.value);
    let newCount = inputCount;
    if(doIncrease == true){
        newCount = inputCount + 1;
    }
    if (doIncrease == false && newCount > 0){
        newCount = inputCount - 1;
    }
    inputValue.value = newCount;
    updateAllValues()
}


//Updates value including Subtotal, VAT and Total
//Function starts here
function updateAllValues(){
    // Subtotal Value Calculator
    const firstClassCount = document.getElementById("firstClassInput");
    const economyCount = document.getElementById("economyClassInput");
    const firstAmount = parseFloat(firstClassCount.value);
    const economyAmount = parseFloat(economyCount.value);
    let subTotal = (firstAmount * 150) + (economyAmount * 100);
    document.getElementById("subtotalValue").innerText = subTotal;


    // VAT calculator
    let vat = subTotal * 0.10;
    document.getElementById("vatAmount").innerText = vat;

    //Total value calculator
    let total = subTotal + vat;
    document.getElementById("totalValue").innerText = total;





}