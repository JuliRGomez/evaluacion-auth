import {Users} from "../models/";
import bcrypt from "bcryptjs";
import {generateJWT} from "../middlewares/jwt";
//1. Completar la logica para manejar el inicio de sesión
// - responder con un codigo de estado 401 cuando las credenciales sean incorrectas
// - responder con un mensaje (message) y codigo de estado 200 cuando las credenciales sean correctas
// - responder con el token jwt (token) 
export const login = async (req, res) => {
    const {email, password} = req.body;
    const results = await Users.findOne({where: {email: email}});
    if(results){
        const valid = bcrypt.compareSync(password, results.password);
        if(valid){
            const token = generateJWT(results);
            return res.status(200).json({
                message:token
            });
        }
        return res.status(200).json({
            message: "Las credenciales son incorrectas"
        });
    }
    return res.status(401).send();


}

//2. Completar el registro de usuario
// - responder con un codigo de estado fallido 400 > cuando hagan falta campos o cuando el usuario ya exista en la base de datos
// - responder con el objeto del usuario que ha sido creado y un codigo 201 cuando el registro sea satisfactorio
export const signIn = async (req, res) => {
    const data= req.body;
    try{
        if(check(data)){  
            const result= await Users.findOne({
                where:{
                    email:data.email
                }
            })
            if(result){
                res.status(400).send();
            }
            else{
                let hashPass = bcrypt.hashSync(data.password, 10);
                data.password = hashPass;
                const r = await Users.create(data)  
                if(r){
                    res.status(201).json(r);
                }
                else{
                    res.status(400);
                }
            }
        }
        else{
        return res.status(400).send();
        }

       

    }
    catch(error){
        console.log(error);
    }
   

    
}

const check = (data) =>{
    
    if(data.firstName&&data.lastName&&data.email&&data.password){
        return true;
    }
       
    else{
        return false;
    }
        
        
}

