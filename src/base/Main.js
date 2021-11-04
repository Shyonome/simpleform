import { useState } from "react" ;
import Form from "../components/Form";
import Result from "../components/Result";

const Main = ({ state, setState }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    return (
        <div>
            <main>
                { !state ? 
                <Form username = {username} setUsername = {setUsername} 
                email = {email} setEmail = {setEmail}
                password = {password} setPassword = {setPassword}
                confirmPassword = {confirmPassword} 
                setConfirmPassword = {setconfirmPassword} state = {state} setState = {setState} />
                : <Result username = {username} 
                email = {email} password = {password} setState = {setState} />}
            </main>
        </div>
    );
}

export default Main