document.addEventListener('DOMContentLoaded', () => {
    const burger=document.querySelector(".burger");
const nav=document.querySelector(".nav");
const navbar=document.querySelector(".navbar");

burger.addEventListener("click",()=>{
    nav.classList.toggle("active")
})


const image = document.getElementById("myImage");

function animateImage(){

    image.style.left=`${Math.random()*10}%`;
    image.style.top= `${Math.random()*10}%`;
    image.style.transform=`translate(-50%-50%) rotate(${Math.random() * 360}deg)`;

}

setInterval(animateImage, 3000);

const log = document.querySelector('.log-container');
const alreadyAccount = document.querySelector('.login-text');
const noAccount = document.querySelector('.login-text3');

 alreadyAccount.addEventListener("click", ()=>{
    log.classList.add("sign-Up-account")
 })

 noAccount.addEventListener("click", ()=>{
    log.classList.remove("sign-Up-account")
 })


 const body = document.querySelector('.mybody');
const signIn = document.querySelector('.signin');
const cross = document.querySelector('.log-cross');

 signIn.addEventListener("click", ()=>{
    body.classList.add("active-signin")
 })

 
 cross.addEventListener("click", ()=>{
    body.classList.remove("active-signin")
 })
})