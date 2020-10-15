import React from 'react';
import { connect } from 'react-redux';
import * as style from '../styles';
import SidebarItem from './SidebarItem';
import {user} from '../data';

const Sidebar = ({dispatch, inbox}) => {

    const elements = ['Inbox', 'Sent', 'Draft', 'Reminder', 'Spam', 'Mark'];
    
    const sidebarStyle = { width: "100%", height: "100%", backgroundColor : "#F6F7FA", padding: "20px", color:style.regularTextColor}
    return (
        <div style={sidebarStyle}>
            <div style={{display:'flex', alignItems:"center", margin: "70px 0"}}>
                <img src={user.avatar} alt="avatar" style={{borderRadius:"50%", height:"60px", margin: "0 15px 0 0"}}></img>
                <div style={{width:'100%', color:style.nameColor, height:"50px", display:'flex', flexDirection: "column", justifyContent:'center'}}>
                    <div style={{fontWeight:'bold'}}>{user.name}</div>
                    <div style={{color: style.regularTextColor}}>Pro account</div>
                </div>
            </div>
            {elements.map((el)=><SidebarItem name={el} inbox={inbox} key={el}/>)}
        </div>
    );
}

const mapStateToProps = state => ({
    inbox: state.inbox
})


export default connect(mapStateToProps)(Sidebar);