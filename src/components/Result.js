import Form from "./Form";

const Result = ({ username, email, password }) => {
    return (
        <div className = "result">
            <span>Name : {username}</span>
            <span>Email : {email}</span>
            <span>Password : {password}</span>
            <button>Edit your information</button>
        </div>
    );
}

export default Result