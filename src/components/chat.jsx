import React from "react";
import More from '../images/more-icon.png'
import Messages from "./messages";
import Input from "./input";

const Chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Ved</span>
                <div className="chatIcons">
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat