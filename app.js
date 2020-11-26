const express = require("express")
const router = require("router")
const app = express()

app.use("/", router)

app.listen(3000, () => {
    console.log("A szerver a 3000-es porton fut")
})