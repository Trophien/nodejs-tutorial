var express = require("express")
//var bodyParser = require("body-parser")
var parameter = require("./parameter.json")
var app = express()

//app.use(bodyParser.urlencoded({ extended: true }))

/*conn.connect((err) => {
    if (err) throw err
    console.log("Connected!")
})*/

app.get("/:furniture", (req, res) => {
    const sql = `SELECT id FROM product WHERE name = "${req.params.furniture}"`
    conn.query(sql, (err, result) => {
        if (err) throw err
        result.length == 0 ? res.send("Nincs ilyen elem!") : res.send(result[0].id)
    })
})

app.listen(3000, () => {
    console.log("A szerver a 3000-es porton fut")
})