document.getElementById("add-btn").addEventListener("click",function(){

const addBank = getValueFromInput("add-bank") ;
const addNumber = getValueFromInput("add-number") ;
if(addNumber.length!="11"){
    alert("invalid bank account number. please try again.")
    return ;
}
const addAmount = getValueFromInput("add-amount")
if(addAmount>50000){
    alert("you can't add more than 50 thousands at a time. try again later")
    return ;
}
const currentBalanceElement =document.getElementById("balance");
 const currentBalance = currentBalanceElement.innerText;

 const addedBalance = Number(currentBalance)+Number(addAmount);

const addPin = getValueFromInput("add-pin")
if(addPin =="1234"){
  alert
     (`you have successfully added ${addAmount} taka
from ${addBank} on your PAYOO wallet.
Thanks for keeping with us.`)

   currentBalanceElement.innerText=addedBalance;

   const historyElement = document.getElementById("history-container");
   const newHistory = document.createElement("div");
   newHistory.innerText =   ` 
     Add Money successful. ${addAmount} taka have been added
     from ${addBank} on your PAYOO wallet at ${new Date()}.
     Thanks for keeping with us.
    ` ;
    newHistory.classList.add("w-full","bg-base-100","border" ,"p-1","mt-2","mb-2","rounded-md","shadow")

    historyElement.append(newHistory) ;
   return ;
}
else{
    alert("invalid pin number. please try again.")

}


})