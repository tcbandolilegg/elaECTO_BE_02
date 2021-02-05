const express = require("express");
const app = express()
const port = 8080


app.listen(port, () => {
  console.log(`servidor subiu na porta ${port}`)
})

const index = require("./src/routes/index")
const pessoas = require("./src/routes/pessoasRouters")

app.use("/", index)
app.use("/pessoas", pessoas)