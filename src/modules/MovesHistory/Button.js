import React from "react";

const  Button = ({onClickHandler, desc}) => {
    return (
        <button onClick={onClickHandler}>{desc}</button>
    );
}

export default Button;
