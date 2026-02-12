import { useState } from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput.jsx'
import { ChatMessages } from './components/ChatMessages.jsx'

function App() {
   const [chatmessages, setchatmessages]=useState([])
        //const chatmessages=array[0];
        //const setchatmessages=array[1];
        //const [chatmessages, setchatmessages] =array;
        return(
          
          <div className="appcont"> 
            {chatmessages.length === 0 && (
              <p className="welcome-message">
                Welcome to the chatbot project! Send a message using the textbox below.
              </p>
            )}
          
            <ChatMessages 
             chatmessages={chatmessages}
            />
            <ChatInput 
            chatmessages={chatmessages}
            setchatmessages={setchatmessages}
 
            /> 
          </div>

        );
}

export default App
