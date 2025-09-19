const express = require("express")
const cors = require("cors")
const app = express()

var global = {
    teachers: [
        {
            name: "Amadeusz Guszti",
            hisClass: "9/A",
            favorite: false,
        },
        {
            name: "Amadeusz Armi",
            hisClass: "9/C",
            favorute: true,
        },
    ],
    //favoriteTeacherIdx: null,
}

app.use(cors())

app.get("/teachers", (req, res) =>{
    res.status(200).json(global.teachers)
})

const port = 3333
app.listen(port, () => {
    console.log("Szerver mükszik itt: ", port)
})