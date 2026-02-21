function getValueFromInput(input){
    const valueInput =document.getElementById(input);
    const value =valueInput.value ;
    return value ;
}

function showOnly(id){
    document.getElementById("form-container").classList.remove("hidden")
     

    const addMoney = document.getElementById("add-money");
    addMoney.classList.add("hidden");
    const cashOut = document.getElementById("cashout");
    cashOut.classList.add("hidden");
    const sendMoney = document.getElementById("send-money")
    sendMoney.classList.add("hidden");
    const getBonus = document.getElementById("get-bonus");
    getBonus.classList.add("hidden");
    const payBill = document.getElementById("pay-bill");
    payBill.classList.add("hidden");
    const history = document.getElementById("t-history")
    history.classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
    
  
}


function generateId(prefix) {
  let randomNumber = Math.floor(10000000 + Math.random() * 90000000);
  return `${prefix}${randomNumber}`;
}

