// Step 01 With dr
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw');
    const mywithdrawField = withdrawField.value;
    const withdrawAmoutFloat = parseFloat(mywithdrawField);
    
    withdrawField.value='';
    
    const preBalanceField = document.getElementById('withdraw-balance');
    const prevBalanceFieldFloat = parseFloat(preBalanceField.innerText);
    
    

    const withdrawnTotal = prevBalanceFieldFloat+withdrawAmoutFloat;
   
    preBalanceField.innerText = withdrawnTotal;

    const finalBalanceField = document.getElementById('balance');
    const finalBalanceFieldFloat = parseFloat(finalBalanceField.innerText);
    
    if(withdrawAmoutFloat>finalBalanceFieldFloat){
        alert('Not Enough Money');
        preBalanceField.innerText = prevBalanceFieldFloat;
    }
    else{
        const finalAmount = finalBalanceFieldFloat - withdrawAmoutFloat;
        finalBalanceField.innerText=finalAmount;
       
    }
    
})