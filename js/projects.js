
let projects = [
    {
        name:'Music Player',
        title:"You may listen any musics in our web app with hight resolution.",
        img:"music-player",
        href:"http://omusic.netlify.app/"
    },{
        name:'Plants Shop',
        title:"Plants Shop Landing Page. Adaptive",
        img:"plants",
        href:"http://plants-shop.netlify.app/"
    },{
        name:'Expedia Landing Page',
        title:"Expedia landing page for desktop",
        img:"expedia",
        href:"https://expedia-landing-page.netlify.app/"
    },{
        name:'Agency Landing Page',
        title:"Agency landing page for desktop",
        img:"agency",
        href:"https://agency-landing-page.netlify.app/"
    },{
        name:'Covid21 Statics',
        title:"Covid21 Statics Daily. Adaptive",
        img:"covid21",
        href:"https://covid21.netlify.app/"
    },{
        name:'Krill Lotin Translator',
        title:"Through this website you can convert lotin letters to krill leters or krill to lotin.",
        img:"krill-lotin",
        href:"https://krill-lotin.netlify.app/"
    }
];


let my_projects = document.getElementById("my_projects")

for(let i=0;i<projects.length;i++){
    my_projects.innerHTML+=`
    <div class="project">
    <img src="./img/projects/${projects[i].img}.png" alt="${projects[i].name}">
    <h3>${projects[i].name}</h3>
    <p>${projects[i].title}</p>
    <a href="${projects[i].href}"><h4>Visit Site</h4></a>
    </div>                
    `
}

function searchProject(filter){
    console.log("working")
    let s_project = my_projects.querySelectorAll(".project")
    for(let i=0;i<s_project.length;i++){
        let s_name = s_project[i].querySelector("h3")
        if(s_name){
            let s_value = s_name.innerHTML;
            if(s_value.toUpperCase().indexOf(filter) > -1){
                s_project[i].style.display=""
            }else{
                s_project[i].style.display="none"
            }
        }
    }
}