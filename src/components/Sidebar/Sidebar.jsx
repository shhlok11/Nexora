import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

export default function Sidebar() {

    const [extended, setExtended] = React.useState(false);

    return (
        <div className="sidebar">

            <div className="top">
                <img className="menu" src={assets.menu_icon} alt="menu" onClick = {() => {
                    setExtended(!extended);
                }} />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="plus" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent title</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="message" />
                            <p>What is React...</p>
                        </div>
                    </div> : null}
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Question icon" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="Question icon" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Question icon" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
}