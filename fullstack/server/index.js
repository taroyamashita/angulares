const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyBsAY2bthJD9-UT-6XkgzR_1RQ5q47JGvU",
    authDomain: "angulares-f168e.firebaseapp.com",
    databaseURL: "https://angulares-f168e.firebaseio.com",
    projectId: "angulares-f168e",
    storageBucket: "angulares-f168e.appspot.com",
    messagingSenderId: "686543903958"
  };

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

firebase.initializeApp(config);
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true};
db.settings(settings);


//console.log(db);

db.collection('projects').get().then((data)=>{
   data.docs.forEach(doc => {
       console.log(doc.data());
   })
})


db.collection('projects').doc().set({
    Description: "Description for Project 69",
    ProjectTitle: "Title for Project69",
    Tags: "Tags for Project69"
})

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