document.getElementById("send-money-btn").addEventListener("click",function(){
    const sendMoneyNumber = getValueFromInput("send-money-number" );
    if(sendMoneyNumber.length !== 11){
        alert("Invalid Number")
    }
    const senMoneyAmount = getValueFromInput("send-money-amount")
    const ownBalance = getBalance();
    // console.log(ownBalance);
    if(senMoneyAmount > ownBalance){
        alert("Invalid Amount")
    }
    const newBalance = getBalance() - Number(senMoneyAmount);
    
    const sendMoneyPin = getValueFromInput("send-money-pin");
    if(sendMoneyPin === "1234"){
        alert("Send Money Succesfull")
        setBalance(newBalance)
    } else{
        alert("Invalid Pin")
    }
})