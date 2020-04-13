var about=document.querySelector('#about');
if(window.screen.width<1000){
    about.classList.remove("offset-s6");
    about.classList.add("m6");
    console.log(about.classList);
}