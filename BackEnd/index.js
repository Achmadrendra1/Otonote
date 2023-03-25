
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require("./routes/index");

const app = express();
const port = process.env.port || 3000;

//Use CORS Lib
app.use(cors());
app.use(express.json()) // biar bisa kirim/terima json
app.use(express.urlencoded({ extended: true })) //semua tipe

app.listen(port, () => {
    console.log(`Server Started & Server listening on port ${port}`);
});

app.use(routes);



