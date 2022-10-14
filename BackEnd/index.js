const express = require('express');
const mongoose = require('mongoose');

const app = express();
const routes = express.Router();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, PATCH, OPTION");
    res.setHeader('Access-Control-Allow-Headers', "Content-Type, Authorization");
})

mongoose.connect('mongodb+srv://Rendra:Newpassword1@cluster0.ojqts2h.mongodb.net/OTONOTE?retryWrites=true&w=majority')
.then(()=>{
    app.listen(4000, console.log('Connection With DB Success !!!'));
})
.catch(err => console.log(err));

routes.use('/test', (req, res, next) => {
    res.json({
        name: "Achmad",
        email: 'a@a.com'
    })
})

app.use('/', routes);

