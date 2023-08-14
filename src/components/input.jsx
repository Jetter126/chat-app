import React from "react";
import Attach from "../images/attach-icon.png";
import Gallery from "../images/gallery-icon.png"

const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Message"/>
            <div className="send">
                <img src={Attach} alt="" />
                <input type="file" style={{display:"none"}} id="file"/>
                <label htmlFor="file">
                    <img src={Gallery} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input