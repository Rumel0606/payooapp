// 
// console.log('pro');
function getValueFromInput(id){
  const input = document.getElementById(id)
  const value = input.value;
//   console.log(value);
return value
}

function getBalance(){
    const balanceElement = document.getElementById("balance")
    const balance = Number(balanceElement.innerText);
    console.log(balance);
    return balance;
}

function setBalance(value){
     const balanceElement = document.getElementById("balance")
     balanceElement.innerText = value;
}

function showOnly(id){
    console.log("Show Only ");
    const addMoney =document.getElementById("add-money");
    const cashOut = document.getElementById("cashout");
    const sendMoney = document.getElementById("send-money");
    const history = document.getElementById("history")
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    sendMoney.classList.add("hidden");
    history.classList.add("hidden")
    const selected = document.getElementById(id);
    selected.classList.remove("hidden")
}
