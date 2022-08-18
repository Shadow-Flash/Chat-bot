import React from "react";

export default function Header({
  setOpenPanel,
  title,
  titleFontColor,
  titleFontStyle,
  titleBarColor
}) {

  function handleCloseBtn() {
    setOpenPanel(false);
  }

  return (
    <div className="header" style={{color: titleFontColor, fontFamily: titleFontStyle, backgroundColor: titleBarColor}}>
      &nbsp;{title}
      <span className="header-cross" onClick={() => handleCloseBtn()} stylr={{color: titleFontColor}}>&#x2715;</span>
    </div>
  );
}
