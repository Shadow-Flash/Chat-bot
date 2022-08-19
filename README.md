# Chat-Bot

Basic chat bot to integerate in various projects.

## How to run 
  - Using nodejs16.x
  - `npm install` - to install the dependencies
  - `npm start` to run the chat bot on `localhost:3000`.
  
## Regarding the code

### Components
  - Chatbot.js
    - Has various props passed to it
    * Chatbot props:
       * `message` - it will be displayed inside the panel 
       * `msgTextColor` - Color of message text
       * `msgTextFont` - font for message text
       * `msgBarColor` - set the color of the background of message
       * `svgIcon` - icon that will be displayed in icon as well as inside panel
       * `svgBackColor` - set the color of the background of svg
       * `svgShadowColor` - set the color of the shadow under the svg
       * `title` - it will be displayed on the header of chatbot
       * `titleFontColor` - Color of title text
       * `titleFontStyle` - font for title text
       * `titleBarColor` - set the color of the background of title
       * `panelColor` - set the color of the panel background
  
  - Chatbot.js has two component in it:
    - Button.js
      - It include the chatbot in closed form
      - <img width="120" alt="image" src="https://user-images.githubusercontent.com/31852437/185574254-c4fe66b5-0adb-43b0-aed7-73e6a0e049ef.png">

    - Panel.js
      - It includes the chatbot in open form
      - <img width="433" alt="image" src="https://user-images.githubusercontent.com/31852437/185574535-2c757dcf-b60b-4d98-9cf4-de36d9494703.png">
    
  - Panel.js has two component as well:
    - Header.js
      - It basically has the title of the chatbot.
    - Messages.js
      - It will show the badge and the message.
      - The image you pass as the prop in the Chatbot is being used in both Button as well as the Badge.
