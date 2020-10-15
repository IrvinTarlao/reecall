import React from 'react';
import * as style from '../styles';
import { connect } from 'react-redux';

const MessageHeader = ({ message, dispatch }) => {
    const buttonStyle = { fontSize: "1.5em", marginRight: "50px", border: "none", backgroundColor: "transparent", display: "none"};
    const iconStyle = { marginLeft: "15px" };
    const starStyle = { marginLeft: "15px", fontSize: "0.6em", color: "#FFB304" }
    return (

        <div style={{ height: "100px", boxShadow: "0px 1px 24px -4px rgba(0,0,0,0.1)", color: style.nameColor, display: 'flex', justifyContent: "space-between", alignItems: "center", padding: "30px" }}>
            <button style={buttonStyle} onClick={() => dispatch({type: "SIDEBAR"})}><i className="fas fa-bars"></i></button>
            <div style={{ width: "100%" }}>
                <div style={{ fontSize: "2em", fontWeight: "bold" }}>
                    {message.from}{message.starred && <i style={starStyle} className="fas fa-star"></i>}
                </div>
                <div className="d-none d-sm-block" style={{ marginTop: "-7px" }}>
                    {message.email}
                </div>
            </div>
            <div className="d-none d-sm-block" style={{ display: 'flex', fontSize: "1.2em", color: style.regularTextColor }}>
                <i style={iconStyle} className="fas fa-filter"></i>
                <i style={iconStyle} className="fas fa-reply"></i>
                <i style={iconStyle} className="far fa-trash-alt"></i>
                <i style={iconStyle} className="fas fa-ellipsis-h"></i>
            </div>
        </div>
    );
};

export default connect()(MessageHeader);