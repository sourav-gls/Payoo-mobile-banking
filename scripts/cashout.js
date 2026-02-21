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
         let result = generateId("CO");


           const historyElement = document.getElementById("history-container");
           const newHistory = document.createElement("div");
         newHistory.innerText =   ` 
              Cashout successful. ${cashoutAmount} taka have been sent
             to Agent:${cashoutNumber} from your PAYOO wallet at ${new Date()}.
             TXID NO: ${result}
             Thanks for stay with us.
            ` ;
          newHistory.classList.add("w-full","bg-base-100","border" ,"p-1","mt-2","mb-2","rounded-md","shadow")

           historyElement.append(newHistory) ;
     }
     else{
         alert("invalid pin");
         return;
     }

})
