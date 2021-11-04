const Header = ({ state }) => {

    let classAccount = undefined;
    let classResult = undefined
    
    const checkState = () => {
        if (state === true) {
            classAccount = "hide";
            classResult = "display";
        } else {
            classAccount = "display";
            classResult = "hide";
        }
    }

    checkState();
    
    return (
        <div>
            <header>
                <span className = {classAccount} >Create account</span>
                <span className = {classResult} >Result</span>
            </header>
        </div>
    );
}

export default Header