const header = document.getElementById('header');

const go_top = document.getElementById('go_top');

window.addEventListener('scroll' , () =>{
    let WinScrollByY = window.scrollY;

    if (WinScrollByY > 0) {
        header.classList.add("header-scroll-black");
        go_top.style.opacity='1'
    } else{
        header.classList.remove("header-scroll-black");
        go_top.style.opacity='0'
    }
})