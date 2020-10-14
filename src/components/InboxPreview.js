import React from 'react';
import MessagePreview from './MessagePreview';

const InboxPreview = ({inbox}) => {
    return (
        <div>
            {inbox.messages.map((message, i) => 
                <MessagePreview message={message} key={'inboxPrev'+i} isClicked={inbox.id === i}/>
            )}
        </div>
    )
};

export default InboxPreview;