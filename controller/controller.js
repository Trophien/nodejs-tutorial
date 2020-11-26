var Database = require("../models/Database")

exports.getPolc = (req, res) => {
    const db = new Database()
    const furniture = "polc"
    db.getPolc(furniture, (err, result) => {
        if (err) res.send("Szerverhiba!")
        else
            res.send(result[0])
    })
}