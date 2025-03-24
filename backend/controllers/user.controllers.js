import {User} from '../models/user.models.js'

const login = async (req,res) => {
try {
    
} catch (error) {
    console.error("Error while logging in");
    return req.status(500); 
}
}


const signup = async(req,res) => {
try {
    
} catch (error) {
    console.error("Error while signing up");
    return req.status(500); 
}
}


export {login,signup}