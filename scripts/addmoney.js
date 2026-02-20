document.getElementById("add-money-btn").addEventListener("click",function(){
    // getting Bank account
    const bankAccount = getValueFromInput("add-money-bank")
    console.log(bankAccount);
    if(bankAccount =="Select a Bank"){
        alert("Please Sekect a bank")
    }
    // Get account number
    const accNo = getValueFromInput("add-money-number")
    if(accNo.length !== 11){
        alert("Invalid Acc No")
        return
    }
    // Get Balacne 
    const amount = getValueFromInput("add-money-amount");
    const newBalance = getBalance() + Number(amount);
    // console.log(newBalance);
   const addMoneyPin = getValueFromInput("add-money-pin")
   if(addMoneyPin == "1234"){
    alert(`Add Money from ${bankAccount} at
         ${ new Date()}`)
       setBalance(newBalance)
     const history = document.getElementById("history");

     const newHistory = document.createElement("div")
     newHistory.innerHTML = `
       <div class="transactions-card p-5 bg-base-100 mt-4">
           Add Money from ${bankAccount}, acc no ${accNo}
         ${new Date()}
      </div>
     `
    history.append(newHistory)
   }
   
   else if(addMoneyPin == ""){
    alert("Please enter a pin")
   }
   
   
   else{
    alert("Invalid Pin")
   }
})
