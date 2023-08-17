import jwt from 'jsonwebtoken';

const JWT_SEC = 'Thisismyjwtsecretkey<3';
const fetchUser = (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send({error:"please authinticate using a valid token"});
    }
    try{
    const data = jwt.verify(token, JWT_SEC);
    req.user = data.user;
    next();
    }catch (error){
        res.status(401).send({error:"please authinticate using a valid token"})
    }
}

export default fetchUser;