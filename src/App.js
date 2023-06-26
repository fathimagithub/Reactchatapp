import React, { useState } from 'react';
import './App.css';
import { BsTelegram } from "react-icons/bs";
import { BsHandThumbsUpFill } from "react-icons/bs";


const user_list = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin'];

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        text: inputText,
        user: randomUser,
        likes: 0,
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const handleLike = (index) => { 
    const updatedMessages = [...messages];
    updatedMessages[index].likes += 1;
    setMessages(updatedMessages);
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="message-thread">
          {messages.map((message, index) => (
            <div className="message" key={index}>
              <div className="username">{message.user}</div>
              <div className="text">{message.text}</div>
              <button class="like-button" onClick={() => handleLike(index)}><div className="like"><BsHandThumbsUpFill/></div></button>
              <span>{message.likes}</span>
              <div className="likes">
                
                
              </div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={handleInputChange}
          />
          <button className="send-button" onClick={handleSendMessage}><div className="send"><BsTelegram/></div></button>
        </div>
      </div>
    </div>
  );
};

export default App;
