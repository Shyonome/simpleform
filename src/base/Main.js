import { useState } from "react" ;
import Form from "../components/Form";

const Main = ({  }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    return (
        <div>
            <main>
                <Form username = {username} setUsername = {setUsername} 
                email = {email} setEmail = {setEmail}
                password = {password} setPassword = {setPassword}
                confirmPassword = {confirmPassword} 
                setConfirmPassword = {setconfirmPassword} />
            </main>
        </div>
    );
}

export default Main