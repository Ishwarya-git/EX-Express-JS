const express = require('express');

const router = express.Router();
const path=require('path');
const rootDir = require('../utils/path');

// use()...> inserted the middleware function
// 8 ways to use use method..

router.get('/add-product', (req, res, next) => {
   res.sendFile(path.join(rootDir,'views','add-product.html'))
})
// router.post('/add-product', (req, res, next) => {
//     console.log('Form data', req.body);
//     res.send('<h1><b>product submitted</b></h1>')
// })

module.exports = router;