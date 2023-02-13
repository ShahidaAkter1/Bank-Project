//step-1: add event Listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){

    //step-2: get the deposit amount from the deposit input feild
    //for input feild use .value to the value inside the input feild
 const userDeposit=   document.getElementById('user-deposit');
 const newDepositAmountString=userDeposit.value;
 const newDepositAmount=parseFloat(newDepositAmountString);
//  console.log(depositUser);

//step-3:get the current deposit total amount
//for non-input (element other than input,text-area) use innerText to get the text
const depositTotalElement=document.getElementById('deposit-total');
const previousDepositTotalString=depositTotalElement.innerText;
const previousDepositTotal=parseFloat(previousDepositTotalString);
// console.log(depositTotal);

//step-4:add numbers to set the total deposit 
const currentDepositTotal=previousDepositTotal + newDepositAmount;
//set the deposit total
depositTotalElement.innerText=currentDepositTotal;

//step-5:get balance current total
const balanceTotalElement=document.getElementById('balance-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);

//step-6:calculate current total balance
const currentBalanceTotal=previousBalanceTotal + newDepositAmount;
//set the balance total
balanceTotalElement.innerText=currentBalanceTotal;

//step-7: clear the deposit feild
userDeposit.value='';
})