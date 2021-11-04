const Result = ({ username, email, password, setState }) => {
    return (
        <div className = "result-structure">
            <div className = "result">
                <div>
                    <span>Name : {username}</span>
                    <span>Email : {email}</span>
                    <span>Password : {password}</span>
                </div>
                <button onClick = {() => {
                    setState(false);
                }} >Edit your information</button>
            </div>
        </div>
    );
}

export default Result