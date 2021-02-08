import {Users} from "../models/";

//1. Completar la logica para manejar el inicio de sesión
// - responder con un codigo de estado 401 cuando las credenciales sean incorrectas
// - responder con un mensaje (message) y codigo de estado 200 cuando las credenciales sean correctas
// - responder con el token jwt (token) 
export const login = async (req, res) => {

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
                console.log("creando");
                //const r = await Users.create()
                
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

