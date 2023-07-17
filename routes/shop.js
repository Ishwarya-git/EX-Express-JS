const express = require('express');
const router = express.Router();
const path=require('path');
const rootDir=require('../utils/path');

// __dirname  absolute path of the directory
    //  containing the currently executing file.
router.get('/',(req,res,next)=>{
    
   res.sendFile(path.join(rootDir,'views','shop.html'))
})

module.exports=router;