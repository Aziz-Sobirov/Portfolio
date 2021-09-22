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

let error404_home = "https://sobirov.netlify.app"
let error404_contact = "https://sobirov.netlify.app/#contact"


// resume
let services = [
    {
        name:"Web Development",
        icon:"far fa-user",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laborum!"
    },{
        name:"Web Development",
        icon:"far fa-user",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laborum!"
    },{
        name:"Web Development",
        icon:"far fa-user",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laborum!"
    },    {
        name:"Web Development",
        icon:"far fa-user",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laborum!"
    },{
        name:"Web Development",
        icon:"far fa-user",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laborum!"
    },{
        name:"Web Development",
        icon:"far fa-user",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, laborum!"
    }
]

for(let s=0;s<services.length;s++){
    document.querySelector(".services #as_grid").innerHTML+=`
<div class="card">
    <h2><i class="${services[s].icon}"></i> ${services[s].name}</h2>
    <p>${services[s].title}</p>
    <div id="as_btn" onclick="orderService()">
        <a href="#">Order</a>
    </div>
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


