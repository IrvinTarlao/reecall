import React from 'react';

const MessagePreview = ({message}) => {
    const cardStyle = {width: "100%", backgroundColor: "#EDF0F7", padding:"20px", height: "100px", border:"2px solid black"}
    const getColor = (cat) => {
        switch (cat) {
            case 'family':
                return '#25BC81'
        
            default:
                break;
        }
    }
    return (
        <div style={cardStyle}>
            <div style={{display: "flex", justifyContent:"space-between"}}>
                <div style={{color: "#424142", fontWeight:"bold"}}>{message.from}</div>
                <div style={{color: "#C1C4C7"}}>{message.time}</div>
            </div>
            <div style={{color: "#ABAEB1"}}>{message.subject}</div>
            <div style={{color: "#B9BCBF"}}>{message.message}</div>
            
            <div style={{backgroundColor:getColor(message.cat), borderRadius: "50%", width:"8px", height:'8px'}}></div>
            <div>{message.starred}</div>
            <div>{message.attachments}</div>
        </div>
    )
}

export default MessagePreview;