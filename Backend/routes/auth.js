
import express from 'express';
import Users from '../models/Users.js';
const authrouter = express.Router();
import { body, check, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import fetchUser from '../middleware/fetchUser.js'



const JWT_SEC = 'Thisismyjwtsecretkey<3';


authrouter.post('/createUser', [
    body('name').isLength({ min: 3 }),
    body("email").notEmpty().withMessage("Email is required"),
    body('password').isLength({ min: 5 }),
    check('email', 'Your email is not valid').not().isEmpty(),
    check('password', 'Your password must be at least 5 characters').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() })
    }
    try {

    const userExists = await Users.findOne({ email: req.body.email });
   
    if (userExists) {
        return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt );

    const user =  await Users.create({
        name: req.body.name,
        password: hashedPassword,
        email: req.body.email,
    });
    const data ={
        user:{
            id: user.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SEC);
    
    console.log(user);
    
    res.json({authtoken})
} catch(error){
    console.log(`Error creating the User ${error}`);
    res.status(500).send("some error occured");
}

})

authrouter.post('/login',[
    body('email', 'Enter a valid email').isEmail(),
    body('password','password cannot be blank').exists(),
], async (req, res)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {email , password} = req.body;
    try{
        let user = await Users.findOne({email});
        if(!user){
            return res.status(400).json({errors: "please try to login with correct credentials"})
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"please login with correct credentials"})
        }
       

        const data = {
            
            user: {
                id:user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SEC);
        res.json({authtoken})

    }catch(error){
        console.error(error.message);
        res.status(500).send("some error occured");

    }
    
})

authrouter.post('/getuser', fetchUser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await Users.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occurred");
    }
});



export default authrouter

/*.then(user => res.json(user))
        .catch(err => {
            console.log(err);
            res.json({ message: err.message });
        })*/



      /*  authrouter.post('/getuser', fetchUser, async (req, res) => {
            try {
                const userId = req.user.id;
                const user = await Users.findById(userId).select("-password");
                res.send(user);
            } catch (error) {
                console.error(error.message);
                res.status(500).send("some error occurred");
            }
        });*/
        