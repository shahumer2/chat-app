import React from 'react'

import useConversation from '../../Zustand/UseConversation';
import { extractTime } from '../../utils/ExtractTime';

const Message = ({ message }) => {

  const { selectedConversation } = useConversation();
  const fromMe = authUser.authUser._id === message?.SenderId;

  
  const chatClassName = fromMe ? "chat-end" : "chat-start"; // Corrected class assignment
  const profilePic = fromMe ? authUser.authUser.profilePic : selectedConversation.profilePic;
  const bubbleColor = fromMe ? "bg-blue-500" : "bg-gray-600"; // Adjusted bubble color
  const formattedTime = extractTime(message.createdAt);
const shakeClass = message.shouldShake?"shake":""
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-7 md:w-10 rounded-full">
          <img alt="User Avatar" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble ${bubbleColor} ${shakeClass} text-xs md:text-lg`}>
        {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-200'>{formattedTime}</div>
    </div>
  );
}

export default Message;
