import React from 'react';
import MessagePreview from './MessagePreview';

const InboxPreview = ({messages}) => {

    return (
        <div>
            {messages.map((message, i) => 
                <MessagePreview message={message} key={'inboxPrev'+i} />
            )}
        </div>

    )
};

export default InboxPreview;