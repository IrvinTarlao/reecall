import React from 'react';
import { connect } from 'react-redux';

const Sidebar = ({dispatch}) => {
    
    const sidebarStyle = { width: "100%", height: "100%", backgroundColor : "blue", color: "white", paddingTop: "100px"}
    return (
        <div style={sidebarStyle}>
            <div onClick={() => dispatch({type: 'INBOX'})}>
                inbox
            </div>
        
            <div onClick={() => dispatch({type: 'SENT'})}>
                sent
            </div>
            <div>
                draft
            </div>
            <div>
                trash
            </div>



        </div>
    );
}


export default connect()(Sidebar);