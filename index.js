const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
   res.send({ imie: "Dawid", nazwisko: "Nabaglo", klasa: "3i1", grupa: "2" })
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
