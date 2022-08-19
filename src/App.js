import Chatbot from './Chatbot';


/**
 * Chatbot props:
 * message - it will be displayed inside the panel 
 * msgTextColor - Color of message text
 * msgTextFont - font for message text
 * msgBarColor - set the color of the background of message
 * svgIcon - icon that will be displayed in icon as well as inside panel
 * svgBackColor - set the color of the background of svg
 * svgShadowColor - set the color of the shadow under the svg
 * title - it will be displayed on the header of chatbot
 * titleFontColor - Color of title text
 * titleFontStyle - font for title text
 * titleBarColor - set the color of the background of title
 * panelColor - set the color of the panel background
 * linkForMessage - link to pass when click on ContentForMessage
 * contentForMessage - text shown in the message
 */

function App() {
  return (
    <div className="App">
      <Chatbot 
        message={`Hello! Welcome to AntStack`}
        linkForMessage={'https://www.youtube.com'}
        contentForMessage={'Click Here!'}
        msgTextColor={"white"}
        msgTextFont={"sans-serif"}
        msgBarColor={"black"}
        svgIcon={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-oT8Fby3dEcid3DSinSY6jRZ91U-fb7J_4e1edax&s"}
        svgBackColor={"none"}
        svgShadowColor={"black"}
        title={"AntStack Chatbot"}
        titleFontColor={'black'}
        titleFontStyle={"sans-serif"}
        titleBarColor={"red"}
        panelColor={"#fff"}
      />
    </div>
  );
}

export default App;
