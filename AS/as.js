// navbar
let navbar = document.getElementById("navbar")

if(navbar){
    navbar.innerHTML=`
<h2>${navbar_title}</h2>
<div id="navbar_bars" onclick="nav()">
    <span></span><span></span><span></span>
</div>
<!-- list -->
<div id="navbar_desktop"></div>
<div id="navbar_mobile"></div>
<!-- close -->
<div id="navbar_close" onclick="nav()"></div>`

// 
let lastScrollTop = 0;
window.addEventListener("scroll",function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollTop > lastScrollTop ? navbar.style.top="-55px" : navbar.style.top="0"
    lastScrollTop = scrollTop;
    navbar.classList.toggle("bg", window.scrollY > 0)
})


let navbar_desktop = document.getElementById("navbar_desktop")
let navbar_mobile = document.getElementById("navbar_mobile")

// desktop
for(let i=0;i<navbar_list.length;i++){
    navbar_desktop.innerHTML+=`<a href="#${navbar_list[i].href}">${navbar_list[i].name}</a>`
}
// mobile
for(let i=0;i<navbar_list.length;i++){
    navbar_mobile.innerHTML+=`<a href="#${navbar_list[i].href}" onclick="nav()">
    <h4>${navbar_list[i].name}</h4><h4 class="far fa-angle-right"></h4></a>`
}
}


let openedNav = false
function nav(){
    navbar.classList.toggle("nav")
}




// app
let app_bar = document.getElementById("as_app-bar")
if(app_bar){
    for(let b=0;b<as_app_bar.length;b++){
        app_bar.innerHTML+=`<li>
        <a href="#${as_app_bar[b].href}">
            <i class="${as_app_bar[b].icon}"></i>
            <span>${as_app_bar[b].name}</span>
        </a>
        </li>`   
    }
}
