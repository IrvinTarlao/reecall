import React from 'react';
import { connect } from 'react-redux';
import * as style from '../styles';

const SidebarItem = ({dispatch, name, inbox}) => {
    
    const sidebarStyle = { width: "100%", padding:"10px 0px", display: 'flex', justifyContent: "space-between", alignItems:"center", color: name === "Inbox" ? style.purpleText : "", fontWeight:"bold"}

    const getClassNames = (name) => {
        switch (name) {
            case 'Inbox':
                return "fas fa-bolt"
            case 'Sent':
                return "far fa-paper-plane"
            case 'Reminder':
                return "far fa-calendar-alt"
            case 'Draft':
                return "far fa-sticky-note"
            case 'Spam':
                return "fas fa-minus-circle"
            case 'Mark':
                return "fas fa-address-card"
            default:
                break;
        }
    }

    return (
        <div style={sidebarStyle}>
            <div style={{display: 'flex', alignItems:"center"}}>
                <i style={{marginRight: "10px"}} className={getClassNames(name)}></i>
                <div onClick={() => dispatch({type: name.toUpperCase()})}>
                    {name}
                </div>
            </div>
            {name === "Inbox" && <div>{inbox.messages.length}</div>}
        </div>
    );
}


export default connect()(SidebarItem);