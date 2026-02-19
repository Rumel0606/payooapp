document.getElementById("cashout-btn").addEventListener('click',function(){
  const cashoutNumber = getValueFromInput("cashout-number");
  console.log(cashoutNumber);
      if(cashoutNumber.length !== 11){
        alert("Invalid Number")
        return
    }
  const cashoutAmount = getValueFromInput("cashout-amount")
  console.log(cashoutAmount);

  // const balanceElement = document.getElementById("balance")
  // const balance = currentBalance.innerText
  // console.log(balance);    
  const currentBalance = getBalance();
  
   const newBalance = currentBalance - Number(cashoutAmount) 
   console.log(newBalance);
   if(newBalance < 0){
    alert("Invalid Amount")
    return ;
   }
   const cashoutPin = getValueFromInput("cashout-pin")
   console.log(cashoutPin);
   if(cashoutPin === "1234"){
    alert("Cashout Succesfull")
    setBalance(newBalance)
   }else{
    alert("Invalid Pin")
    return
   }
})






// document.getElementById("cashout-btn").addEventListener('click',function(){
//     // 1.get the agent number and validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length !== 11){
//         alert("Invalid Number")
//         return
//     }
//     // 2.get the amount,validate,convert to number 

//     const cashoutInputAmount = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutInputAmount.value
//     console.log(cashoutAmount);
//     // 3.get the cureent balance,valudate,convert to number
//   const balanceElement = document.getElementById("balance")
//   const balance =balanceElement.innerText
//   console.log(balance);    
//     // 4. calculate new balance 
//    const newBalance = Number(balance) - Number(cashoutAmount) 
//    if(newBalance < 0){
//     alert('Invalid Amount')
//     return;
//    }  
//  console.log(newBalance);
//     // 5.get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin")
//     const cashoutPin = cashoutPinInput.value;
//     console.log(cashoutPin);
//     if(cashoutPin === "1234"){
//          // 6.true:: show an alert >set new balance 
//         alert("Cashout Succesfull");
//         balanceElement.innerText = newBalance;
//           console.log(newBalance);
//     }
//      else{ 
//         // 6.true:: show an eror alert >retrun
//         alert("Invalid Pin")
//         return
//     } 
  
    
// })