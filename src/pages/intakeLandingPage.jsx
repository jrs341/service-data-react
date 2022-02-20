import React from 'react';
import { useNavigate } from "react-router-dom";

const IntakeLandingPage = () => {
    let navigate = useNavigate();

    const handleClick = () =>{
        navigate("/customerInfo");
    }

    return (
        <div>
            <p>
                Before continuing it may be helpful to open the following link in a new tab: <a href='https://apps.tpwd.state.tx.us/tora/home.faces'>Query Owner Info</a>
            </p>
            <button onClick={handleClick}>Continue</button>
        </div>
    );
};

export { IntakeLandingPage };