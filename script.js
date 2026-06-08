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
