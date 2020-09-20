import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons"
import React, { useEffect, useState } from 'react';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import "./Chat.css";



function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(()=> {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you typed >>>",input);
        setInput("");
    }
 
    return (
        <div className="chat">
      
            <div className="chat_header">
            <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`} alt="pic"/>
                <div className="chat_headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at.....</p>
                </div>

               <div className="chat_headerRight">
               <IconButton><SearchOutlined/></IconButton>
             
                 <IconButton><MoreVert/></IconButton>
               </div> 
            </div>

            <div className="chat_body">
            {/*messages.map((message) => (
                <p className={`chat_message ${message.recieved && "chat_receiver"}`}>
                <span className="chat_name">{message.name}</span>
                {message.message}
                <span className="chat_timestamp">
                {message.timestamp}
                </span> </p>
               
            ))*/}
            <p className={`chat_message ${true && "chat_receiver"}`}>
            <span className="chat_name">ain</span>
          uqehwifhuufy
            <span className="chat_timestamp">
            {new Date().toUTCString()}
            </span> </p>
               
               
            </div>

            <div className="chat_footer">
                < InsertEmoticonOutlinedIcon />
                <IconButton> <AttachFile /> </IconButton>
                <form>
                   <input 
                   value={input} onChange={(e) => setInput(e.target.value)}
                   placeholder="Type a message"
                   type="text"  />
                   <button onClick={sendMessage}
                    type="submit">
                   Send a message</button>
                </form>
                <IconButton > <MicIcon/></IconButton>
            </div>
            
        </div>
    )
}

export default Chat
