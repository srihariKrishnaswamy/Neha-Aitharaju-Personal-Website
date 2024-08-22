import React, { useState, useEffect } from "react";
import classes from "./Chatbotframe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

function Chatbotframe() {
  const [newMessageText, setNewMessageText] = useState("");
  const [fullyUp, setFullyUp] = useState(false); // set to true when chatbot is working
  const [isLoading, setIsLoading] = useState(false);
  const [outText, setOutText] = useState("Hello, I'm Neha's chatbot here to answer any questions about Neha! I was made using the OpenAI API & was deployed on a free deployment service. Do note that because of that, I might take a second to answer your first question. Fire away!")

  const API_URL = "http://localhost:8080";

  useEffect(() => {
    axios.post(`${API_URL}/chatbot`, {ask: ""}) // warming up the API in case it's been 15 mins since the last server activity
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
  }, [])

  const getAPIRes = async (question) => {
    try {
        const postData = {ask: question + " THIS IS REALLY IMPORTANT: Make sure to limit your response to strictly under 50 words/400 characters no matter what the question just was."}
        const response = await axios.post(`${API_URL}/chatbot`, postData);
        const newRes = response.data.response;
        if (newRes.length < 450) {
          setOutText(newRes)
        } else {
          setOutText("Response is too long to be displayed, please reword your question.")
        }
        setIsLoading(false)
        console.log(response.data);
      } catch (error) {
        console.error(error);
        setIsLoading(false)
      }
  }

  const handleSendMessage = () => {
    console.log("new message text,", newMessageText);
    if (isLoading || newMessageText.trim() === "") {
      return;
    }
    if (newMessageText.length > 200) {
      alert("Your question is too long");
      return;
    }
    setIsLoading(true);
    getAPIRes(newMessageText.trim())
    setNewMessageText("");
  };

  const handleViewToggle = () => {
    setFullyUp(!fullyUp);
  };

  return (
    <div>
      {fullyUp ? (
        <div className="chatInterface">
          <div className="chatbotBanner">
            <p className="bannerText">Neha's Chatbot</p>
            <button className="circularButton" onClick={handleViewToggle}>
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
          <div className="output-container">
            {
                isLoading ? (
                    <ClipLoader color="#FFFFFF" loading={isLoading} size={50} />
                ) : (
                    <p className="resText">{outText}</p>
                )
            }
          </div>
          <div className="input-container"> {/* the input field & button here is what you need to style */}
            <input
              className="input"
              placeholder="Type your message..."
              value={newMessageText}
              onChange={(e) => setNewMessageText(e.target.value)}
            />
            <button className="button" onClick={handleSendMessage}>Ask</button>
          </div>
        </div>
      ) : (
        <div className="chatInterfaceDown">
          <div className="chatbotBanner">
            <p className="bannerText">Neha's Chatbot - Coming Soon!</p>
            {/* <button className="circularButton" onClick={handleViewToggle}>
              <FontAwesomeIcon icon={faArrowUp} />
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbotframe;