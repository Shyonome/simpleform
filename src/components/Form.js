import Result from "./Result";

const Form = ({ username, setUsername, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword }) => {

    const checkSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Vos deux mots de passe ne sont pas identiques")
        } else {
            alert("clicked");
            return (
            <div>
                <Result username = {username} 
                email = {email} password = {password} />
            </div>
            );
        }
    }

    return (
        <div className = "form-structure">
            <form className = "form-components" onSubmit = {checkSubmit}>
    
                <span>Name</span>
                <input type="text" placeholder = "Name"
                onChange = {(event) => {
                    setUsername(event.target.value);
                }} value = {username} />

                <span>Email</span>
                <input type="email" placeholder = "email" 
                onChange = {(event) => {
                    setEmail(event.target.value);
                }} value = {email} />

                <span>Password</span>
                <input type="password" placeholder = "password" 
                onChange = {(event) => {
                    setPassword(event.target.value);
                }} value = {password} />

                <span>Confirm your password</span>
                <input type="password" placeholder = "confirmPassword" 
                onChange = {(event) => {
                    setConfirmPassword(event.target.value);
                }} value = {confirmPassword} />

                <button type="submit"><span>Register</span></button>

            </form>
        </div>
    );
}

export default Form