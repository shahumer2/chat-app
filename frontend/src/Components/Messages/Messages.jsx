import React, { useEffect, useRef } from 'react';
import Message from './Message.jsx';
import UseGetMessages from './UseGetMessages';
import useConversation from '../../Zustand/UseConversation';
import useListenMessage from './useListenMessage.js';



const Messages = () => {

  const { selectedConversation } = useConversation();
  const { messages } = UseGetMessages(selectedConversation);
  
useListenMessage();
  const lastMessageRef = useRef();
  console.log(messages, "htyyu");
  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {messages.length > 0 ? (
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>

            <Message  message={message} />

          </div>
        ))
      ) : (
        <p className='text-center text-slate-400 pt-5'> Send A Message To Start A Conversation</p>
      )}
    </div>
  );
};

export default Messages;
