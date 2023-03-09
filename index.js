const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(https://teste-chat.onrender.com)

io.on("connection", (socket) => {
    socket.on("disconnect", () => {
        console.log("X deu disconnect " + socket.id)
    })

    socket.on("msg", (data) => {
        io.emit("showmsg", data)
        console.log(data)
    })

    socket.on("name", (data) => {
        socket.emit("nome", data)
        console.log(data)
    })

})



app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/chat", (req, res) => {
    res.render("chat")
})


http.listen(4004, () => {
    console.log("Servidor está rodando.")
})
