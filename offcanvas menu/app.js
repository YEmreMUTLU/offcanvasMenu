const btnOpen=document.querySelector("#btn1")
const btnClose=document.querySelector("#btn")
const maninMenu=document.querySelector(".mainMenu")

btnOpen.onclick=()=>{
    maninMenu.style.display="block";
}
btnClose.onclick=()=>{
    maninMenu.style.display="none";
}
