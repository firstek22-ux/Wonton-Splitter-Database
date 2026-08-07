function showPage(page){

let sections=document.querySelectorAll("main section");


sections.forEach(section=>{

section.classList.add("hidden");

});


document
.getElementById(page)
.classList.remove("hidden");


}



function openLogin(){

document.getElementById("loginBox").style.display="block";

}


function closeLogin(){

document.getElementById("loginBox").style.display="none";

}



function login(){

let user=document.getElementById("user").value;

let pass=document.getElementById("pass").value;


// 測試帳號

if(user=="admin" && pass=="123456"){

alert("身份確認成功");

document.getElementById("loginBox").style.display="none";


document.getElementById("postArea").style.display="block";


}

else{

alert("身份驗證失敗");

}

}
