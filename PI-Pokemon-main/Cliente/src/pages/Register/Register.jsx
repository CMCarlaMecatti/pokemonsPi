import FormUser from "../../components/FormUser/FormUser";
import axios from "axios";

const Register = () => {
    const postUser = async (userData) => {
        try {
            const { username, email, password } = userData;
            const { data } = await axios.post("http://localhost:3001/user", { username, email, password })
        } catch (error) {
            console.log(error.message);
        }
 }
   
   
    return (
        <div>
            <FormUser postUser={postUser} />
        </div>
    );
     }

export default Register