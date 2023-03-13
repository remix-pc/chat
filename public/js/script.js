var socket = io("https://teste-chat.onrender.com", { transports: ['websocket'] })

//('http://localhost:4004')

socket.on("disconnect", () => {

    console.log("disconectou")

});

    //Icones provisórios
    // var imgs = [
    //      '../images/potatoGlados.png',
    //      '../images/pinguim.jpg',
    // ]
    
    var usernameField = document.getElementById("username")
    usernameField.value = localStorage.getItem("key")
    const imageData = localStorage.getItem('img')


    const byteString = window.atob(imageData.split(',')[1])
    const buffer = new Uint8Array(byteString.length)
    for(let i = 0; i < byteString.length; i++) {
        buffer[i] = byteString.charCodeAt(i)
    }


    const blob = new Blob([buffer], {type: 'image/png'})
    const imageURL = URL.createObjectURL(blob)

    socket.on("showmsg", (data) => {

        
        



        console.log(data)
        var chat = document.getElementById("chat")
        var img = document.createElement("img")
        img.classList.add("perfil")
        var p = document.createElement("p")
        var div = document.createElement('div')
        var image = document.createElement("img")
        image.classList.add("imagemURL")
        //const imagePerfil = document.createElement('img')
        const imgRegex = /\.(gif|jpe?g|png)$/i
        var teste = data.msg
        if(imgRegex.test(teste)){
            console.log("A url é uma imagem")
            div.append(img)
            p.innerHTML = data.username + ": "
            div.append(p)
            chat.append(div)
            image.src = teste
            chat.append(image)
        }else {
            div.append(img)
            p.innerHTML = data.username + ": " + data.msg
            div.append(p)
            chat.append(div)
            image.src = teste
        }

        

        if(data.username == "Remixo"){
            img.src =  imageURL
            //"https://i.pinimg.com/originals/89/5d/79/895d79a1776bfc0de2ceeccc494274d3.png"
            p.style.color = 'red'
        }else{
            // let i = Math.random() * 2
            // let y = parseInt(i)
            img.src = imageURL
        }
       
        
        
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
    msgField.value = ""
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

