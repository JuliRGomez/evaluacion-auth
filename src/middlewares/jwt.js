import jwt from "jsonwebtoken";
require("dotenv").config();

//Completar la funcion para generar un token JWT en base al usuario que ha iniciado sesion
export const generateJWT = (user) => {
    const userObj = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    };
    const token = jwt.sign(userObj, process.env.SECRET_KEY, { algorithm: "HS384", expiresIn: "1h"});
    return token;

}

//Validar el token 
//const validateJWT = (req, res) => {
export const  validateJWT = (req,res)=>{
    const token = req.header('token');
 //const verify= jwt.verify(token, secretOrPublicKey, ["HS384", callback])
 const verify = jwt.verify(token,process.env.SECRET_KEY);
 console.log(verify);
}