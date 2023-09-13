const nameRegex = /^[A-Za-z\s]+$/;
const numberRegex = /^([1-9]\d{0,2}|999)$/;
const httpsRegex =  /https:\/\/.*\.com/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex= /^(?=.*\d).+$/

export const validationPoke= (createdPoke) => {
    const errors= {};
    if(!nameRegex.test(createdPoke.name)){
       errors.name= "Name must only contain letters."
      }
    if ((createdPoke.types.length < 1 )) errors.types = 'Please select 1 or 2 types';
    
    if (!numberRegex.test(createdPoke.life)) errors.life = 'Please enter a number between 1 and 999';
    if (!numberRegex.test(createdPoke.attack)) errors.attack = 'Please enter a number between 1 and 999';
    if (!numberRegex.test(createdPoke.defense)) errors.defense = 'Please enter a number between 1 and 999';
    if (!httpsRegex.test(createdPoke.image) || createdPoke.image.trim() === '') errors.image = 'It must be an URL, example: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"';
    if ( createdPoke.speed) {
        if (isNaN(createdPoke.speed) || !numberRegex.test(createdPoke.speed)) errors.speed = 'The number must be between 1 and 999';
    };
    if (createdPoke.height) {
        if (isNaN(createdPoke.height) || !numberRegex.test(createdPoke.height)) errors.height = 'The number must be between 1 and 999';
    };
    if (createdPoke.weight) {
        if (isNaN(createdPoke.weight) || !numberRegex.test(createdPoke.weight)) errors.weight = 'The number must be between 1 and 999';
    
    
    };

    return errors;
}



export const validationLogin= (userData) => {
    const errors= {};
     
   
    if(!userData.username){
        errors.username= "Username must not be empty."
    }
    if(userData.username.length> 10) {
        errors.username= "Username has exceeded the maximum number of characters."
    }
    if(!passwordRegex.test(userData.password)){
        errors.password= "Password must contain at least one number."
    }
    if(userData.password.length < 6 || userData.password.length > 12){
        errors.password= "Password must be between 6 and 12 characters."
    }

    return errors;
}

export const validationUserPoke= ({username, password, email}) => {
    const errors= {};
     if(!emailRegex.test(email)){
        errors.email= "Please enter a valid email."
     }
    if(!username){
        errors.username= "Username must not be empty."
    }
    if(username.length> 10) {
        errors.username= "Username has exceeded the maximum number of characters."
    }
    if(!passwordRegex.test(password)){
        errors.password= "Password must contain at least one number."
    }
    if(password.length < 6 || password.length > 12){
        errors.password= "Password must contain at least one number."
    }

    return errors;
    
}


