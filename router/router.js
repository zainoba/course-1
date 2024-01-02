const express = require('express');
const router = express.Router();
const posts=require('../helper/posts.json')
const postscontroller=require('../controller/postscontroller')
const usercontroller=require('../controller/usercontroller')
const productontroller=require('../controller/productconlroller')

router.get('/' , (req , res) =>{
    res.status(200)
})



router.get('/add-product' , productontroller.addproduct)

router.post('/login' , usercontroller.loginuser)
router.post('/singup' , usercontroller.singupuser)
router.get('/posts' , postscontroller.getallposts)



module.exports =router