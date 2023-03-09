var socket = io("https://teste-chat.onrender.com", { transports: ['websocket'] })

//('http://localhost:4004')

socket.on("disconnect", () => {

    console.log("disconectou")

});

    
    var usernameField = document.getElementById("username")
    usernameField.value = localStorage.getItem("key")


socket.on("showmsg", (data) => {

        console.log(data)
        var chat = document.getElementById("chat")
        var img = document.createElement("img")
        var p = document.createElement("p")
        var div = document.createElement('div')
        img.src = "https://i.pinimg.com/originals/89/5d/79/895d79a1776bfc0de2ceeccc494274d3.png" //../images/pinguim.jpg
        div.append(img)
        p.innerHTML = data.username + " : " + data.msg
        div.append(p)
        chat.append(div)
        
    })

   

function enviar(){
    var msgField = document.getElementById("msg")
    var msg = msgField.value

    if(/^\s*$/.test(msg)){
        alert("Insira algo")
    }else {
        var username = usernameField.value
        socket.emit("msg", {msg: msg, username: username})
    }
}


//Evento do onLoad no body


function evento(){

    Swal.fire({
        title: 'Converse tranquilo e respeite a todos.',
        width: 500,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/img/nyan-cat.gif")
          left top
          no-repeat
        `
      })

}

