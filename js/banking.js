function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    
    const depositAmountText = depositInput.value;
    const depositAmount = parseInt(depositAmountText);

     //clear input field
     depositInput.value = '';

    return depositAmount;

}





document.getElementById('deposit-button').addEventListener
('click', function() {
    // const depositInput = document.getElementById('deposit-amount');    
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseInt(depositAmountText);
    // console.log(depositAmount);

    const depositAmount = getInputValue('deposit-amount');

    //get current deposit
    const depositTotal = document.getElementById('update-deposit');
    
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    
    depositTotal.innerText = depositAmount + previousDepositTotal;

   


    //update balance
    const balanceTotal = document.getElementById('update-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;
})

//withdraw money
document.getElementById('withdraw-button').addEventListener
('click', function() {
    // const withdrawInput = document.getElementById('withdraw-amount');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
const withdrawAmount = getInputValue('withdraw-amount');

    //update withdraw total
     const withdrawTotal = document.getElementById('minus-withdraw');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);    

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    //update balance
    const balanceTotal = document.getElementById('update-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
})