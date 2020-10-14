import React from 'react';
import * as style from '../styles';

const MessageHeader = ({ message }) => {
    const buttonStyle = { fontSize: "1.5em", marginRight: "50px", border: "none", backgroundColor: "transparent" };
    const iconStyle = { marginLeft: "15px" };
    const starStyle = { marginLeft: "15px", fontSize: "0.6em", color: "#FFB304" }
    return (

        <div style={{ height: "100px", boxShadow: "0px 1px 24px -4px rgba(0,0,0,0.1)", color: style.nameColor, display: 'flex', justifyContent: "space-between", alignItems: "center", padding: "30px" }}>
            <button style={buttonStyle}><i className="fas fa-bars"></i></button>
            <div style={{ width: "100%" }}>
                <div style={{ fontSize: "2em", fontWeight: "bold" }}>
                    {message.from}{message.starred && <i style={starStyle} className="fas fa-star"></i>}
                </div>
                <div style={{ marginTop: "-7px" }}>
                    {message.email}
                </div>
            </div>
            <div style={{ display: 'flex', fontSize: "1.2em", color: style.regularTextColor }}>
                <i style={iconStyle} className="fas fa-filter"></i>
                <i style={iconStyle} className="fas fa-reply"></i>
                <i style={iconStyle} className="far fa-trash-alt"></i>
                <i style={iconStyle} className="fas fa-ellipsis-h"></i>
            </div>
        </div>
    );
};

export default MessageHeader;