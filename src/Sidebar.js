import React from 'react';
import "./Sidebar.css";
import SidebarChats from "./SidebarChats"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from "@material-ui/core";
import {SearchOutlined} from '@material-ui/icons';



function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
            <Avatar src="" alt="pic" />
             < div className="sidebar_headerRight">
             <IconButton>
             <DonutLargeIcon /> </IconButton>
             <IconButton><ChatIcon /> </IconButton>
             <IconButton> <MoreVertIcon /></IconButton>
                
             </div>

            </div>

            <div className="sidebar_search">
               <div className="sidebar_searchContainer">
               <IconButton><SearchOutlined />    </IconButton>
               <input placeholder="Search or start new chat" type="text"/>
               </div>
            </div>
            <div className="sidebar_chats">
            <SidebarChats addNewChat/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            </div>
        </div>
    )
}

export default Sidebar;