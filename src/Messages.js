import React from "react";

export default function Messages({ 
  message,
  msgTextColor,
  msgTextFont,
  msgBarColor,
  svgIcon,
  svgBackColor,
  svgShadowColor,
  panelColor,
  linkForMessage,
  contentForMessage
 }) {
  const svgImage = svgIcon || require("./logo.svg").default
  return (
    <div className="messages" style={{backgroundColor: panelColor}}>
        <img 
          className="bot-image"
          src={svgImage} style={{backgroundColor: svgBackColor, boxShadow: `0px 2px 4px ${svgShadowColor}`}} 
          alt="bot-pic"
        />
        <div className="bot-message" style={{color: msgTextColor, fontFamily: msgTextFont, backgroundColor: msgBarColor}}>
            {message}
            <a href={linkForMessage} style={{color: msgTextColor}}>{contentForMessage}</a>
        </div>
    </div>
  );
}
