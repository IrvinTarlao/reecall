import React from 'react';
import * as style from '../styles';
import MessageHeader from './MessageHeader';
import MessageBody from './MessageBody';

const Message = ({message}) => {
    console.log(message)
    const buttonStyle = {fontSize: "1.5em", marginRight: "50px", border: "none", backgroundColor: "transparent"};
    const iconStyle={marginLeft:"15px"};
    const starStyle = {marginLeft: "15px", fontSize: "0.6em", color: "#FFB304"}
    return (
        <div style={{backgroundColor : style.displayMsgColor, height: "100%", overflow:"hidden"}}>
            <MessageHeader message={message}/>
            <MessageBody message={message}/>
        </div>
    )
}

export default Message