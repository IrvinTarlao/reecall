import React from 'react';
import * as style from '../styles';
import MessageHeader from './MessageHeader';
import MessageBody from './MessageBody';

const Message = ({message}) => {
    return (
        <div style={{backgroundColor : style.displayMsgColor, height: "100%", overflow:"hidden"}}>
            <MessageHeader message={message}/>
            <MessageBody message={message}/>
        </div>
    )
}

export default Message;