const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const region = require("./controller/region")
const gender = require("./controller/gender")
const hostpial = require("./controller/hostpial")

const app = express()

app
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))

app.get("/region/infectee", region)
app.get("/gender/infectee", gender)
app.get("/hostpial", hostpial)

app.listen(8080, () => {
  console.log("running")
})
