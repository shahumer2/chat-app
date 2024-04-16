import React, { useState } from 'react';
import { IoIosSend } from "react-icons/io";

import useSendMessage from './useSendMessage';

const MessageInput = () => {
  const [sendMessage, setsendMessage] = useState("");
  const {SendMessage}= useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

   
      if (!sendMessage) {
        return;
      }
      await SendMessage(sendMessage);
      setsendMessage(""); // Reset the input field after sending the message
    
  };

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
    <div className='w-full relative'>
      <input
          type="text" 
          className='border text-sm rounded-lg block w-full p-2.5  bg-gray-500 border-gray-600 text-white'
          value={sendMessage}
          onChange={(e) => setsendMessage(e.target.value)}
        />
        <button 
          type='submit' 
          className="mx-2 absolute right-0 bottom-0 mr-2 mb-2 flex items-center bg-gray-500 p-2"
        >
          <IoIosSend className='h-5 w-5' />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
