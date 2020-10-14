import React from 'react';

const Sidebar = () => {
    const sidebarStyle = { width: "100%", height: "100%", backgroundColor : "blue", color: "white"}
    return (
        <div style={sidebarStyle}>
            <div>
                inbox
            </div>
            <div>
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

export default Sidebar;