/*const fetch = require('node-fetch');
fetch('https://github.com/')
    .then(res => res.text())
    .then(body => console.log(body))
    .then("done");

    //fetch('https://github.com/')
   // .then((res) => {
    //    console.log(res);
      //  return res.text();
    //})
   // .then(body => console.log(body));

   ///////////////
   try
   {
   const fetch = require('node-fetch');
   fetch('homework1.json').then(response => {
    return response.json();
 })
 .then(myJson => {
    console.log(myJson);
 })
}catch(error) {
    console.error('Error:', error);
}

 //////////////
 const fetch = require('node-fetch');
 async function getUser () {
    try {
      const response = await fetch('https://randomuser.me/api')
      const data = await response.json();
      console.log(response.status);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
   }

   async function callGetUser(){
    await getUser();
   }
   callGetUser();
   const fetch = require('node-fetch');
   ////////////////////////////////
async function getWeather(lat, lot) {
    try {
        const response = await fetch(`https://api.darksky.net/forecast/5b0669fa2b50528e6e0cd5f1c8d81d45/${lat},${lot}`)
        const data = await response.json();
        console.log(response.status);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

const result = async function callGetUser(lat, lot) {
    await getWeather(lat, lot);

}
const lat = 13.7563;
const lot = 100.5018;
result(lat, lot);
const myJSON = '{"name": "Kate", "pet": {"dog": "Corgi", "cat": "Persian"}}';
const myObj = JSON.parse(myJSON); // convert string to obj
console.log(`name :${myObj.name}`);
myObj.name = "Peter";
console.log(`name :${myObj.name}`);
// Modify myObj...
const myString = JSON.stringify(myObj);
console.log(`name :${myString}`);
///////////////////////////////////////////
const http = require('http');
http.createServer((req, res) => {
  res.write('hello world');
  res.end();
}).listen(3000);
const http = require('http');

   http.createServer((req, res) => {
       if(req.url == '/') {
           res.write('hello world');
       } else if(req.url == '/tom'){
           res.write('hello tom')
       } else if(req.url == '/joe'){
           res.write('hello joe')
       }
       res.end();
   }).listen(3000);
const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('hello world')
})
app.listen(3000)

const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('HELLO')
})
app.get('/bye', function (req, res) {
  res.send('Good bye')
})
app.listen(5555)

const express = require('express')
const app = express()
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
app.post('/user', function (req, res) {
  console.log(`BODY : ${req.body}`);
  console.log(`METHOD : ${req.method}`);
  console.log(`URL : ${req.url}`);
  //console.log(`${req.body}`);
  res.send('POST request to the homepage')
})
app.listen(5555)
///////////////////////////////////////
const express = require('express')
const app = express()
const interceptorFunction = function(req,res,next){
console.log(`URL: : ${req.url}`);
console.log(`METHOD: : ${req.method}`);
next();
}
app.use(interceptorFunction);
app.use(express.json());
app.listen(5555)
///////////////////////*/
