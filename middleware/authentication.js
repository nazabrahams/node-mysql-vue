import {compare} from "bcrypt";
import {getUserDb} from "../model/userDB.js"
import jwt from 'jsonwebtoken'

const checkUser = async(req,res,next)=>{
    const {username,password}=req.body;
    let hashedPassword = (await getUserDb(username)).password
    console.log(hashedPassword);
    
 let result = await compare(password,hashedPassword)
        if(result==true){
            let token = jwt.sign({username:username}, process.env.SECRET_KEY, {expiresIn:'1h'})
            console.log(token);
            req.body.token = token
            next()
        }else{
        res.send('Password is incorrect')
    }
}
export {checkUser}