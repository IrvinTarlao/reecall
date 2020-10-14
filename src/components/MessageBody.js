import React from 'react';
import * as style from '../styles';
import Moment from 'react-moment';
import MessageBubbles from './MessageBubbles'

const MessageBody = ({ message }) => {

    return (
        <div style={{ height: "100%", width: "100%", color: style.regularTextColor, padding: "20px", textAlign: "center" }}>
            <div style={{ width: "100%", borderBottom: `1px solid ${style.outlineColor}`, color: style.purpleText, fontWeight: 'bold' }}>{message.subject}</div>
            <div style={{ fontWeight: 'bold', fontSize: "0.8em" }}>
                <Moment format="DD MMM YYYY">
                    {message.time}
                </Moment>
            </div>
            <MessageBubbles message={message} />
        </div>
    );
};

export default MessageBody;