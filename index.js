const express = require('express');

const app = express();

const operasi  = [
    "Penambahan",
    "Pengurangan",
    "Pembagian",
    "Pengalian"
]

app.get('/calculator', (req, res) => {
    res.send(operasi);
})

app.get('/', (req, res) => {
    res.send("");
})

app.listen(7000, () => {
    console.log("App is running in port 7000!");
})

