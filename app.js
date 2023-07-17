// const http=require('http');
const express = require('express');

const app = express();
const path=require('path');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes=require('./routes/shop');
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.use(bodyParser.urlencoded())


// app.use((req, res, next) => {
//     console.log('always middleware');
//     res.send('<h1>third page</h1>')
// })

// app.use((req,res,next)=>{
//     console.log('third  middleware');
//     res.send({ishu:'json format'});


// })
// const server=http.createServer(app);
// server.listen(2001); instead of below
app.listen(2001);
