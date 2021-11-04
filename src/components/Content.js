import { useState } from "react" ;
import Header from "../base/Header";
import Main from "../base/Main";
import Footer from "../base/Footer";


const Content = ({  }) => {
    const [state, setState] = useState(false);
    return (
        <div>
            <Header state = {state} />
            <Main state = {state} setState = {setState} />
            <Footer />
        </div>
    );
}

export default Content