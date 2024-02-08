var express=require('express');
var router=express.Router();

const credential={

    email:'akshayjyothip@gmail.com',
    password:'1234'
}


// login user

router.post('/login',(req,res)=>{

    if(req.body.email===credential.email && req.body.password===credential.password){

req.session.user=req.body.email;
res.redirect('/route/dashboard');
// res.send('login sucessfully...!');

    }else{

        res.end('invalid Username')
    }
});


//route for dashboard

router.get('/dashboard',(req,res)=>{

    if(req.session.user){

        res.render('dashboard',{user:req.session.user})
    }else{

        res.send('unauthorize user')
    }
})

//router for logout

router.get('/logout',(req,res)=>{

    req.session.destroy();
    res.redirect('/');
})

module.exports=router;