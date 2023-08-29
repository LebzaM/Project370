import React from 'react'
import Chatbot from "react-chatbot-kit";
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const chatbot = () => {
  return (
    <div className="appchat">
       <div style={{maxWidth: '300px'}}>
       <Chatbot config={config}
         messageParser={MessageParser}
         actionProvider={ActionProvider}/>
       </div>
     </div>
  )
}

export default chatbot