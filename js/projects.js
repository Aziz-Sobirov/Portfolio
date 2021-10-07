// Aziz Sobirov

let projects = [
    {
        name:'Bag Shop Landing Page',
        title:"Product Landing Page",
        img:"bag-shop",
        href:"https://bag-shop.netlify.app/",
        info:'HTML, CSS(SCSS), VueJS, API, Adaptive'
    },{
        name:'Weather App',
        title:"Weather App Vue Project",
        img:"weather-app-vue",
        href:"https://weather-app-vue2.netlify.app/",
        info:'HTML, CSS(SCSS), VueJS, API, Adaptive'
    },{
        name:'Luxury Hotels',
        title:"Luxury Hotels Landing Page",
        img:"luxury",
        href:"https://hotel-website-design.netlify.app/",
        info:'HTML, CSS(SCSS), for Desktop'
    },{
        name:'Music Player',
        title:"You may listen any musics in our web app with hight resolution.",
        img:"music-player",
        href:"http://omusic.netlify.app/",
        info:'HTML, CSS(SCSS), JavaScript, Adaptive'
    },{
        name:'Plants Shop',
        title:"Plants Shop Landing Page.",
        img:"plants",
        href:"http://plants-shop.netlify.app/",
        info:'HTML, CSS(SCSS), JavaScript, Adaptive'
    },{
        name:'Expedia',
        title:"Expedia — лендинг туристического агентства.",
        img:"expedia",
        href:"https://expedia-landing-page.netlify.app/",
        info:'HTML, CSS(SCSS), for Desktop'
    },{
        name:'Agency',
        title:"Agency — лендинг диджитал агентства",
        img:"agency",
        href:"https://agency-landing-page.netlify.app/",
        info:'HTML, CSS(SCSS), for Desktop'
    },{
        name:'Portfolio',
        title:"My old Portfolio",
        img:"portfolio",
        href:"https://azizdev.netlify.app/",
        info:'HTML, CSS(SCSS), JavaScript, Telegram Bot API, Adaptive'
    },{
        name:'Covid21 Statics',
        title:"Through this website you can view the daily statistics of covid infection in the world.",
        img:"covid21",
        href:"https://covid21.netlify.app/",
        info:'HTML, CSS(SCSS), JavaScript, API, Adaptive'
    },{
        name:'Krill Lotin Translator',
        title:"Through this website you can convert lotin letters to krill leters or krill to lotin.",
        img:"krill-lotin",
        href:"https://krill-lotin.netlify.app/",
        info:'HTML, CSS, JavaScript, Adaptive'
    }
];


let my_projects = document.getElementById("my_projects")

for(let i=0;i<projects.length;i++){
    my_projects.innerHTML+=`
    <div class="project">
    <img src="./img/projects/${projects[i].img}.png" alt="${projects[i].name}">
    <h3>${projects[i].name}</h3>
    <p>${projects[i].title}</p>
    <h4>${projects[i].info}</h4>
    <div id="as_btn">
        <a href="${projects[i].href}">Visit Site</a>
    </div>
    </div>                
    `
}

// function searchProject(filter){
//     console.log("working")
//     let s_project = my_projects.querySelectorAll(".project")
//     for(let i=0;i<s_project.length;i++){
//         let s_name = s_project[i].querySelector("h3")
//         if(s_name){
//             let s_value = s_name.innerHTML;
//             if(s_value.toUpperCase().indexOf(filter) > -1){
//                 s_project[i].style.display=""
//             }else{
//                 s_project[i].style.display="none"
//             }
//         }
//     }
// }
