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
