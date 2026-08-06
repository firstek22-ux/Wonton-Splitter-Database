function showPage(page){

let sections=document.querySelectorAll("main section");


sections.forEach(section=>{

section.classList.add("hidden");

});


document
.getElementById(page)
.classList.remove("hidden");


}
