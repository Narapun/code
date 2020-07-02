/*//localhost:3000/user/first
const express = require('express')
const app = express()
const interceptorFunction = function(req,res,next){
console.log(`URL: : ${req.url}`);
console.log(`METHOD: : ${req.method}`);
next();
}
app.use(interceptorFunction);
const userRoute = require('./userRoute')
app.use('/user', userRoute)
app.listen(3000)

//localhost:3000/user/first
const express = require('express')
const app = express()
const userRoute = require('./userRoute')
app.use('/user', userRoute)
app.listen(3000)

//localhost:3000/dogandcatRoute
const express = require('express')
const app = express()
const dogRoute = require('./dogRoute')
const catRoute = require('./catRoute')
app.use('/dog', dogRoute)
app.use('/cat', catRoute)
app.listen(3000)

/////////////////////////localhost:3000/test.txt
const express = require('express')
const app = express()
app.use(express.static('./public/'))
const userRoute = require('./userRoute')
//app.use('/user', userRoute)
app.listen(3000)

////////////////localhost:3000/picture.png
const express = require('express')
const app = express()
app.use(express.static('./public/'))
const userRoute = require('./userRoute')
app.use('/user', userRoute)
app.listen(3000)*/
////////////////////////////////////////////
const express = require('express');

const {intercepter} = require('./middleware/logMiddleware');
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');

const app = express();

app.use(express.static('./public/'))
app.use(express.json());
app.use(intercepter);

app.use('/api/user', userRoute);
app.use('/api/post', postRoute);

app.listen(3000);