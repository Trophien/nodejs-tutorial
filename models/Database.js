const parameter = require("../parameter.json")
const mysql     = require("mysql")

class Database {
    constructor() {
        this.conn = mysql.createConnection({
            host: parameter.db.host,
            user: parameter.db.user,
            password: parameter.db.password,
            database: "restapi"
        })
    }

    getPolc(furniture, callback) {
        this.conn.query(`SELECT id, name FROM product WHERE name = "${furniture}"`, (err, result) => {
            if (err) return callback(err, null)
            return callback(null, result)
        })
    } 
}

module.exports = Database