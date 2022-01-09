import express from 'express';
const path = require('path');
const nodemailer = require("nodemailer");
//importing data from data folder
// import data from './data/data.json';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//creating route
//API 1
app.get('/', (req,res)=>
    
    res.send("Welcome to Coding Competition #2 by Kavya B , NORKA B1")

    // res.json(data)
);

//API 2
app.get('/home', (req, res)=> {
    res.sendFile(path.join(__dirname, './public/login.html'));
    
  });

//creating route
app.get('/mailer', (req,res)=>{
    var email = req.query.mail;
     console.log(email);

    // send mail with defined transport object
    // let info = await transporter.sendMail({
    // from: '"ayvak000@gmail.com>', // sender address
    // to: `${email}`, // list of receivers
    // subject: "Hello ✔", // Subject line
    // text: "Hello world?", // plain text body
  });




// //creating route
// app.put('/item', (req,res)=>
//     res.send(`a put request with /item route on port ${PORT}`)
// );

// //creating route
// app.delete('/item', (req,res)=>
//     res.send(`a delete request with /item route on port ${PORT}`)
// );

 app.listen(PORT, () => {

    console.log(`Your server is running on port ${PORT}`);
    //printing data in console
    // console.log(data);

});