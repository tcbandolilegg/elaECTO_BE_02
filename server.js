const express = require("express");
const app = express()
const port = 8080
const router = require("./src/routes/index.js")
app.listen(port, () => {
  console.log(`servidor subiu na porta ${port}`)
})

const index = require("./src/routes/index")

app.use("/", index)