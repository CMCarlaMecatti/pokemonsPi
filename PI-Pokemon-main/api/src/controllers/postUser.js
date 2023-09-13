const {User} = require('../db');
const { login } = require('./login');


const postUser = async(req, res)=>{
    try {
        const {username ,email, password}= req.body;
           
        if(!username || !email || !password){
            return res.status(400).send("Faltan datos")
        }
        
       const newUser= await User.findOrCreate({
        where:{
            username, email, password
        }
       })
       return res.status(200).json(newUser)

    } catch (error) {
        return res.status(500).json(error.message)
    }
    
}

module.exports= {postUser};