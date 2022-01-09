import express from 'express';
const path = require('path');
//importing data from data folder
// import data from './data/data.json';

const app = express();
const PORT = 3000;

//creating route
//API 1
app.get('/', (req,res)=>
    
    res.send("Welcome to Coding Competition #2 by Kavya B , NORKA B1")

    // res.json(data)
);

//API 2
app.get('/home', (req, res)=> {
    res.sendFile(path.join(__dirname, '/login.html'));
  });

// //creating route
// app.post('/newItem', (req,res)=>
//     //will create a response with the text a post request with / route on port 3000 when loaded
//     res.send(`a post request with /newItem route on port ${PORT}`)
// );

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