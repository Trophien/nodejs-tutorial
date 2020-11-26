var express = require("express")
var bodyParser = require("body-parser")
var app = express()

app.use(bodyParser.urlencoded({ extended: true }))

// beírunk url-be localhost:8080
// hello world

// get - adatlekérés
// post - feltöltünk
// put - adatmódosítás
// delete - törlünk
var visitors = 0
app.get("/", (req, res) => {
    console.log(++visitors)
    res.send(`Te vagy a(z) ${visitors}. látogató`)
})

app.get("/jatek/valami", (req, res) => {
    res.send("Ez itt a játék oldal")
})

app.get("/:name", (req, res) => {
    var name = req.params.name
    res.send("A neved: " + name)
})

app.post("/send", (req, res) => {
    res.send("Lakcím: " + req.body.address)
})

app.listen(3000, () => {
    console.log("A szerver a 3000-es porton működik")
})

/*

get - /aru/tej, /aru/kenyer - írjuk ki az árát (kitalálod)
get - /:szam - kiiratjuk, hogy pozitív vagy negatív
post - /send - írjuk ki a dupláját

*/