let _button = document.getElementById('goToTop')

_button.addEventListener("click" , ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})