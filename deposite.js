// Step 01 -Work with Deposite Button
document.getElementById('deposite-btn').addEventListener('click',function(){
    const depositeField = document.getElementById('deposite');
    const depositeValue = parseFloat(depositeField.value);
    
    // Set the value to Deposite section
    const depositeTextField = document.getElementById('deposite-value');
    const depositeAmount = parseFloat(depositeTextField.innerText);
    const currentTotal = depositeAmount + depositeValue;
    depositeTextField.innerText = currentTotal;

    depositeField.value = '';
    // Final Balance
    const balanceField = document.getElementById('balance');
    const finalBalance = parseFloat(currentTotal);
    balanceField.innerText = finalBalance; 
})