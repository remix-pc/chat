var socket = io("https://teste-chat.onrender.com", { transports: ['websocket'] })

socket.on("disconnect", () => {

    console.log("disconectou")

});

    
    var usernameField = document.getElementById("username")
    usernameField.value = localStorage.getItem("key")


socket.on("showmsg", (data) => {
        console.log(data)
        var chat = document.getElementById("chat")
        var p = document.createElement("p")
        p.innerHTML = data.username + " : " + data.msg
        chat.append(p)
    })

   

function enviar(){
    var msgField = document.getElementById("msg")


    var msg = msgField.value
    var username = usernameField.value
    msgField.value = ""
    socket.emit("msg", {msg: msg, username: username})

   

}


//Evento do onLoad no body

function evento(){

    Swal.fire({
        title: 'Converse tranquilo e respeite a todos.',
        width: 600,
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

