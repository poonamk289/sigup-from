console.log("sjdbhf");
const name1 = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const logout = document.getElementById("logout");
const directSignUp = document.getElementById("directSignUp");
const obj = localStorage.getItem("signupdetail");
console.log(JSON.parse(obj));
const value = JSON.parse(obj)[0];
name1.innerHTML=`${value.Uname}`;
email.innerHTML=`${value.email}`;
password.innerHTML=`${value.password}`;
logout.addEventListener("click",()=>{
    localStorage.clear();
    window.location.href="index.html";
})

directSignUp.addEventListener("click",(event)=>{
    
        window.location.href = "index.html";
    
})