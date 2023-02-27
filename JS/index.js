const mediaQuery = window.matchMedia('(max-width:1200px)');

document.querySelector('hamburger').addEventListener("click",()=>{
   document.querySelector('.sidebar').style.display ="flex";
})