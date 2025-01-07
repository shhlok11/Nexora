import React, { createContext } from "react";
import { run } from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [input, setInput] = React.useState("");
    const [recentPrompt, setRecentPrompt] = React.useState("");
    const [previousPrompt, setPreviousPrompt] = React.useState([]);
    const [showResult, setShowResult] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [resultData, setResultData] = React.useState("");

    const onSent = async () => {
        if (input.trim() === "") {
            alert("Please enter a prompt before sending.");
            return;
        }

        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);

        try {
            const response = await run(input);
            if (response.candidates && response.candidates.length > 0) {
                const candidateResponse = response.candidates[0].text;
                if (typeof candidateResponse === "string") {
                    let responseArray = candidateResponse.split("**");
                    let newResponse = "";
                    for (let i = 0; i < responseArray.length; i++) {
                        if (i === 0 || i % 2 !== 1) {
                            newResponse += responseArray[i];
                        } else {
                            newResponse += "<b>" + responseArray[i] + "</b>";
                        }
                    }
                    let newResponse2 = newResponse.split("*").join("</br>");
                    setResultData(newResponse2);
                }
            }
        } catch (error) {
            console.error("Error in onSent function:", error);
        } finally {
            setLoading(false);
            setInput("");
        }
    };

    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        input,
        resultData,
        setInput
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;