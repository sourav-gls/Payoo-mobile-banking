document.getElementById("cashout-btn").addEventListener("click",function(){
     const cashoutNumber = getValueFromInput("cashout-number");
     if(cashoutNumber.length != "11"){
           alert("invalid number")
           return ;
     }
     const cashoutAmount = getValueFromInput("cashout-amount");

     const currentBalanceElement =document.getElementById("balance");
     const currentBalance = currentBalanceElement.innerText;
    
     const cashoutPin = getValueFromInput("cashout-pin");
     const newBalance = Number(currentBalance)-Number(cashoutAmount)
     if(newBalance < 0){
         alert("invalid amount")
         return ;
     }
     if(cashoutPin == "1234"){
         alert("Cashout Succesfull");
         currentBalanceElement.innerText= newBalance ;
     }
     else{
         alert("invalid pin");
         return;
     }

})
