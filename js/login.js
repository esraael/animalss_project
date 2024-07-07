let username=document.querySelector("#username")
let Password=document.querySelector("#password")
let Submit=document.querySelector("#sign_up")

let getusername=localStorage.getItem("username")
let getpassword=localStorage.getItem("Password")

Submit.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value==="" || Password.value===""){
        alert("Please Fill Your Data")
    }
    else{
        if((getusername&&getusername.trim()===username.value.trim()) &&(getpassword&&getpassword.trim()=== Password.value.trim())){
            setTimeout(()=>{
                window.location="Home.html"
            },1500)
        }else{
            alert("username or password is wrong")
        }

    }
})