import React from "react"; 
import './sisu.styles.scss';
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const Sisu = () => {
    return(
        <div className='sisu'>
            <SignIn/>
            <SignUp/>
        </div>
    );
}

export default Sisu;