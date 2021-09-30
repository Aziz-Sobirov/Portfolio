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

window.addEventListener("load",function(){
    // Wrap every letter in a span
var textWrapper1 = document.querySelector('.home-text1 .letters');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var textWrapper2 = document.querySelector('.home-text2 .letters');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var textWrapper3 = document.querySelector('.home-text3 .letters');
textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.home-text1 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  })
  .add({
    targets: '.home-text1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
  //   home-text 2
  .add({
    targets: '.home-text2 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  })
  .add({
    targets: '.home-text2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
  //   home-text 3
  .add({
    targets: '.home-text3 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  })
  .add({
    targets: '.home-text3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
})

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


