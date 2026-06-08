window.onload = ()=>{

setTimeout(()=>{

document.querySelector(".loader").style.opacity="0";

setTimeout(()=>{

document.querySelector(".loader").style.display="none";

},1000)

},2000)

}

document.getElementById("exploreBtn").onclick=()=>{

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

})

}
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(item=>{

let top = item.getBoundingClientRect().top;

let windowHeight = window.innerHeight;

if(top < windowHeight-100){

item.classList.add("active");

}

})

})

document.getElementById("secretBtn").onclick=()=>{

document.getElementById("secretMessage").style.display="block";

}

const text =
"Whenever life gets heavy, you don't have to carry it alone.";

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typingText").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,50);

}

}

typeWriter();

const buttons =
document.querySelectorAll(".memory-btn");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

let content =
btn.nextElementSibling;

if(content.style.display==="block"){

content.style.display="none";

}else{

content.style.display="block";

}

})

})

document.getElementById("vaultBtn").onclick=()=>{

document.getElementById("vaultMessage")
.style.display="block";

}


