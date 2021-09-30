let as_app_bar = [
    {
        name:'Home',
        icon:"ai-home",
        href:"home"
    },{
        name:'Resume',
        icon:"far fa-address-card",
        href:"resume"
    },{
        name:'Projects',
        icon:"far fa-browser",
        href:"projects"
    },{
        name:'Services',
        icon:"far fa-tag",
        href:"services"
    },{
        name:'Contact',
        icon:"far fa-user-headset",
        href:"contact"
    }
];

// resume
let services = [
    {
        name:"Designer",
        icon:"fad fa-pencil-ruler",
        title:"I value simple content structure, clean design patterns, and thoughtful interactions.",
        other: 'Things I enjoy designing:',
        likes:'UX, UI, Web Design and Mobile Design',
        tools:'Design Tools',
        lang:'Figma'
    },{
        name:"Front-end Developer",
        icon:"fad fa-code",
        title:"I like to code things and enjoy bringing ideas to life in the browser.",
        other: 'Languages I know:',
        likes:'HTML(PUG,JADE), CSS(SCSS,STYLUS), JavaScript(VueJS)',
        tools:'Dev Tools',
        lang:'Vs Code, AS library(my own library), Codepen, Sololearn, Git, Github'
    },{
        name:"Back-end Developer",
        icon:"fad fa-terminal",
        title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, omnis.",
        other: 'Languages I know:',
        likes:'MongoDB, Express.JS, Node.JS',
        tools:'Design Tools',
        lang:'Vs Code, Git, Github, Heroku, Google Console'
    }
]

for(let s=0;s<services.length;s++){
    document.querySelector(".services #as_grid").innerHTML+=`
<div class="card">
    <h1 class="${services[s].icon}"></h1>
    <h2>${services[s].name}</h2>
    <p>${services[s].title}</p>
    <h3>${services[s].other}</h3>
    <p>${services[s].likes}</p>
    <h3>${services[s].tools}</h3>
    <p>${services[s].lang}</p>
</div>`
}

function orderService(){
    document.getElementById("as_error404").style.display="flex"
}


// contact
async function sendRequest(){
    let name = document.getElementById("contact_name").value
    let email = document.getElementById("contact_email").value
    let phone = document.getElementById("contact_number").value
    let mes = document.getElementById("contact_message").value

    let res = await fetch("https://api.telegram.org/bot1505568108:AAHUD1iNTmWSXCYVhPjOk3ir9c9ePjheCrU/sendMessage",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            chat_id:"648066821",
            text: `🥳 New Request\n\n👨‍💼 User: ${name}\n📧 Email: ${email}\n☎️ Phone: ${phone}\n📬 Message: ${mes}`,
            parse_mode: "HTML"
        })
    })
    let data = await res.json()
    alertia({
        "msg": "The request was sent successfully",
        "type":"normal",
        "style":"slit",
        "time":"3000"
    });
}


