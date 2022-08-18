import React, { useState } from 'react';
import Button from './Button.js';
import Panel from './Panel.js';

function Chatbot(props) {
    const [openPanel, setOpenPanel] = useState(false);

    return (
        <div>
            { !openPanel ? 
            <Button 
                setOpenPanel={setOpenPanel} 
                {...props}
            /> 
            : null}
            { openPanel ? 
            <Panel 
                setOpenPanel={setOpenPanel}
                {...props}
                /> 
            : null }
        </div>
    )
}

export default Chatbot;