import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import loadingimg from '../assets/loading-spinner.png'

export function ChatInput({chatmessages, setchatmessages}){
  const [inputText,setInputText]=useState('');

  function saveInputText(event){
    setInputText(event.target.value);
  }

  async function sendmes() {
    setInputText('');

    const newchatmessage = [
      ...chatmessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];

    setchatmessages([
      ...newchatmessage,
      {
        message: <img src={loadingimg} className="loading-spinner" />,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);

    setchatmessages([
      ...newchatmessage,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);
  }

  return (
    <div className="chatincont">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chatinput"
      />
      <button onClick={sendmes} className="sendbut">Send</button>
    </div>
  );
}