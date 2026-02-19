document.getElementById("login-btn").addEventListener("click",function()
{
    const numberInput = document.getElementById("input-number");
    const contact = numberInput.value ;
    console.log(contact);

    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value ;
    console.log(pin);

    if (contact=="01850280881" && pin=="1234"){
        alert("login succesfull") ;

        window.location.assign("/home.html")
    }
    else{
        alert("login failed") ;
        return ;
    }
})