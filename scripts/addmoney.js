document.getElementById("add-money-btn").addEventListener("click",function(){
    // getting Bank account
    const bankAccount = getValueFromInput("add-money-number")
    console.log(bankAccount);
    if(bankAccount =="Select a Bank"){
        alert("Please Sekect a bank")
    }
    // Get account number
    const accNo = getValueFromInput("add-money-number")
    if(accNo.length !== 11){
        alert("Invalid Acc No")
    }
    // Get Balacne 
    const amount = getValueFromInput("add-money-amount");
    const newBalance = getBalance() + Number(amount);
    // console.log(newBalance);
   const addMoneyPin = getValueFromInput("add-money-pin")
   if(addMoneyPin == "1234"){
    alert(`Add Money from ${bankAccount} at
         ${ new Date()}`)
     setBalance(newBalance);
   } else if(addMoneyPin == ""){
    alert("Please enter a pin")
   }
   
   
   else{
    alert("Invalid Pin")
   }
})
