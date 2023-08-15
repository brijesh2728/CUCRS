const navbar=document.getElementById('nav-b')
document.addEventListener('scroll',()=>{
    if(window.scrollY>0)
        navbar.classList.add('scrolled')
    else
        navbar.classList.remove('scrolled')
})