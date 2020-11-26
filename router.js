const express = require("expresss")
const router = express.Router()
const controller = require("./controller/controller")

router.get("/", controller.getPolc)

module.exports = router