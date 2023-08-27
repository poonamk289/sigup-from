console.log("sjdbhf");
const signUp = document.getElementById("sign-up");
const name1 = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("err-msg");
const directSignUp = document.getElementById("directSignUp");
const directProfile = document.getElementById("directProfile");
signUp.addEventListener("click",(event)=>{
    event.preventDefault();
    
        if(name1.value!==""&&email.value!=="" && password.value!==""){
        let obj = [{
            Uname:name1.value,
            email:email.value,
            password:password.value,}]
            localStorage.setItem('signupdetail',JSON.stringify(obj));
            window.location.href = "profile.html";
        }else{
            error.innerHTML="All fields are required";
            error.style.display="block";
        }
     
})

directProfile.addEventListener("click",(event)=>{
    if(JSON.parse(localStorage.getItem('signupdetail'))){
        console.log("scc");
        window.location.href = "profile.html";
    }else{
        error.innerHTML="All fields required for signUp";
        error.style.display="block";
    }
})