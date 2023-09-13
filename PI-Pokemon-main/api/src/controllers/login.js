const { User } = require('../db');

const login= async(req, res)=>{
    try {
        const{username, password}= req.body;
        if(!username ||!password) {
            return res.status(400).send('Faltan datos'); 
        }
     const user= await User.findOne({where:{username, password}})

     if(!user) return res.status(404).send('Usuario no encontrado');
     user.password=== password
     ? res.status(200).json({access:true, userId:user.userId, username:user.username, email:user.email})
     :res.status(403).send('Contraseña incorreta')

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports=  {login} 
