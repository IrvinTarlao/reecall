import React from 'react';
import * as style from '../styles';

const Sent = () => {
    const inboxStyle = { width: "100%", height: "100%", backgroundColor : style.displayMsgColor, color: style.nameColor, display:"flex", justifyContent:"center", alignItems:"center"}
    return (
        <div style={inboxStyle}>
            Oups... nothing here
        </div>
    );
}

export default Sent;