import Form from "./Form";

const Result = ({ username, email, password }) => {
    return (
        <div>
            <div className = "result">
                <span>Name : {username}</span>
                <span>Email : {email}</span>
                <span>Password : {password}</span>
                <button>Edit your information</button>
            </div>
        </div>
    );
}

export default Result