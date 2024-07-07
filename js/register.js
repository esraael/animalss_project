let username=document.querySelector("#username")
let Email=document.querySelector("#email")
let Password=document.querySelector("#password")
let Submit=document.querySelector("#sign_up")

Submit.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value==="" || Email.value==="" || Password.value===""){
        alert("Please Fill Your Data")
    }
    else{
        localStorage.setItem("username" , username.value)
        localStorage.setItem("Email" , Email.value)
        localStorage.setItem("Password" , Password.value)
        
        setTimeout(()=>{
            window.location="login.html"

        },1500)

    }
})