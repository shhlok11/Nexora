import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

export default function Main() {
    const { onSent, recentPrompt, showResult, resultData, loading, setInput, input } = useContext(Context);

    return (
        <div className="main">
            <div className="nav">
                <p>Nexora</p>
                <img src={assets.user_icon} alt="User icon" />
            </div>
            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p>
                                <span>Hello, Dev</span>
                            </p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest some beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="Compass icon" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="Bulb icon" />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="Message icon" />
                            </div>
                            <div className="card">
                                <p>Improve readability of the code</p>
                                <img src={assets.code_icon} alt="Code icon" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="User icon" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="Gemini icon" />
                            {loading 
                            ? <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                        : 
                        <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={e => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Enter a prompt here"
                        />
                        <div>
                            <img
                                onClick={() => {
                                    if (input.trim() === "") {
                                        alert("Please enter a prompt before sending.");
                                        return;
                                    }
                                    onSent();
                                }}
                                src={assets.send_icon}
                                alt="Send icon"
                            />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Nexora may display inaccurate info, including about people, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    );
}