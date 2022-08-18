import React from "react";
import Messages from "./Messages";
import Header from "./Header";

function Panel({
  setOpenPanel,
  ...props
}) {

  return (
    <div className="chatbot">
      <Header 
        setOpenPanel={setOpenPanel}
        {...props} />
      <Messages {...props}/>
    </div>
  );
}

export default Panel;