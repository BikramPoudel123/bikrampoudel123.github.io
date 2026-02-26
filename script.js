const menu = document.querySelector(".menu");
const navlist = document.getElementById("navlist");
const navs= document.querySelectorAll(".hover");


menu.addEventListener("click", () => {
    navlist.classList.toggle("active");
});

navs.forEach((nav)=>{
    nav.addEventListener("click", ()=>{
        navlist.classList.toggle("active");
    })
})