
import {useEffect,useRef} from 'react'
import { ChatMessage } from './ChatMessage.jsx';

 export function ChatMessages({chatmessages}){
          const chtmsgref=useRef(null);
          useEffect(()=>{
             const contelem=chtmsgref.current;
             if(contelem){
                contelem.scrollTop=contelem.scrollHeight;
             }},[chatmessages]);
          
        return(
          <div className="chtmsgcont" ref={chtmsgref}> 
          
                {chatmessages.map((chatmessage)=>{
                return(
                <ChatMessage 
                message={chatmessage.message}
                sender={chatmessage.sender}
                key={chatmessage.id}
                />
                )
                }
                )
              }
        
          </div>
        )}