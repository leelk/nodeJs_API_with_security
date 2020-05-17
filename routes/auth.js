const router = require('express').Router();
const User = require('../model/User');



// VALIDATION
const Joi = require('@hapi/joi');

//LETS VALIDATE THE DATA BEFOR SAVE IN THE DB



const schema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(2).required()
});




router.post('/register', async(req,res)=>{

    

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    
    });

    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch{
        res.status(400).send(err);
    }

});

router.get('/get',(req,res)=>{
    res.send("Server Runing");
});


module.exports = router;