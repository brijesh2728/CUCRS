// card button
let Stud_Login=document.body.getElementsByClassName('login-button')[0]
let Recrt_Login=document.body.getElementsByClassName('login-button')[1]
let Admin_Login=document.body.getElementsByClassName('login-button')[2]
// card divs
let Stud_Card=document.body.getElementsByClassName('login-card')[0]
let Recrt_Card=document.body.getElementsByClassName('login-card')[1]
let Admin_Card=document.body.getElementsByClassName('login-card')[2]
// Card inner login div
let S_login=document.body.getElementsByClassName('login')[0]
let Rect_login=document.body.getElementsByClassName('login')[1]
let Adm_login=document.body.getElementsByClassName('login')[2]
// Card inner login-window div
let S_login_wind=document.body.getElementsByClassName('login-window')[0]
let Rect_login_wind=document.body.getElementsByClassName('login-window')[1]
let Adm_login_wind=document.body.getElementsByClassName('login-window')[2]

//CloseButton
let S_close=document.body.getElementsByClassName("close_button")[0]
let Recrt_close=document.body.getElementsByClassName("close_button")[1]
let Admin_close=document.body.getElementsByClassName("close_button")[2]

//Not recommended to use this
let sleep = async(millisec)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{ resolve(true)},millisec)
    })
}
Stud_Login.addEventListener('click',()=>{
    Stud_Card.classList.remove("login-card-b")
    Stud_Card.classList.remove("login-card-hover")
    Stud_Card.classList.add("login-card-c")
    Recrt_Card.style.display="none"
    Admin_Card.style.display="none"
    S_login.style.display="none"
    S_login_wind.classList.remove("disp-none")
    S_login_wind.classList.add("disp-flexrow-center")
})
Recrt_Login.addEventListener('click',()=>{
    Recrt_Card.classList.remove("login-card-b")
    Recrt_Card.classList.remove("login-card-hover")
    Recrt_Card.classList.add("login-card-c")
    Stud_Card.style.display="none"
    Admin_Card.style.display="none"   
    Rect_login.style.display="none"
    Rect_login_wind.classList.remove("disp-none")
    Rect_login_wind.classList.add("disp-flexrow-center")
})
Admin_Login.addEventListener('click',()=>{
    Admin_Card.classList.remove("login-card-b")
    Admin_Card.classList.remove("login-card-hover")
    Admin_Card.classList.add("login-card-c")
    Stud_Card.style.display="none"
    Recrt_Card.style.display="none" 
    Adm_login.style.display="none"
    Rect_login.style.display="none"
    Adm_login_wind.classList.remove("disp-none")
    Adm_login_wind.classList.add("disp-flexrow-center")
})

//Close Buttons
S_close.addEventListener('click',()=>{
    Stud_Card.classList.add("login-card-b")
    Stud_Card.classList.remove("login-card-c")
    Recrt_Card.style.display="block"
    Admin_Card.style.display="block"
    S_login.style.display="block"
    S_login_wind.classList.add("disp-none")
    S_login_wind.classList.remove("disp-flexrow-center")
    Stud_Card.classList.add("login-card-hover")
})
Recrt_close.addEventListener('click',()=>{
    Recrt_Card.classList.add("login-card-b")
    Recrt_Card.classList.remove("login-card-c")
    Stud_Card.style.display="block"
    Admin_Card.style.display="block"   
    Rect_login.style.display="block"
    Rect_login_wind.classList.add("disp-none")
    Rect_login_wind.classList.remove("disp-flexrow-center")   
    Recrt_Card.classList.add("login-card-hover")
})
Admin_close.addEventListener('click',()=>{
    Admin_Card.classList.add("login-card-b")
    Admin_Card.classList.add("login-card-hover")
    Admin_Card.classList.remove("login-card-c")
    Stud_Card.style.display="block"
    Recrt_Card.style.display="block"
    Adm_login.style.display="block"
    Rect_login.style.display="block"
    Adm_login_wind.classList.add("disp-none")
    Adm_login_wind.classList.remove("disp-flexrow-center") 
})