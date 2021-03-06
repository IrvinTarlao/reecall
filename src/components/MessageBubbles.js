import React from 'react';
import * as style from '../styles';

import Bubble from './Bubble';
import Reply from './Reply';

const MessageBubbles = ({ message }) => {

    return (
        <div>
            <div>
                <Bubble message={message} />
                {message.replies.length > 0 && message.replies.map((reply, i)=><Bubble message={reply} colorReply={"#ECEFFF"} key={"bubble"+i}/>)}
            </div>
            <div style={{position:"absolute", bottom:30, width:"100%", backgroundColor:style.displayMsgColor}}>
                <Reply message={message}/>
            </div>
        </div>
    );
};

export default MessageBubbles;