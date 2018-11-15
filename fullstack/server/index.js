const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

let testData = [  
    {  
       "Project1":"Title of Project1",
       "Description":"Description of Project1",
       "Tags":"Tags for Project1"
    },
    {  
       "Project1":"Title of Project2",
       "Description":"Description of Project2",
       "Tags":"Tags for Project2"
    },
    {  
       "Project1":"Title of Project 1",
       "Description":"Description of Project1",
       "Tags":"Tags for Project1"
    }
 ]

const PORT = process.env.PORT || 8069; 

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, ()=> {
    console.log('Listening on Port', PORT);
})

app.get('/', (req, res)=>{
    res.send(testData);
})