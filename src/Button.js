import React from "react";

function Button(props) {

    function handleClick() {
        props.setOpenPanel(true);
    }
    const svgIcon = props.svgIcon || require("./logo.svg").default;

    return (
        <div className="btn-circle">
        <img 
            className={`${'bot-image'} ${'bot-btn'}`} 
            src={svgIcon} 
            style={{backgroundColor: props.svgBackColor, boxShadow: `0px 2px 4px ${props.svgShadowColor}`}} 
            alt="bot-pic" 
            onClick={() => handleClick()}/>
        </div>
    );
}

export default Button;