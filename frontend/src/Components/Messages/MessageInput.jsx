import React from 'react';
import { IoIosSend } from "react-icons/io";
const MessageInput = () => {
  return (
    <form className="absolute bottom-1 px-y my-3 w-400 flex">
      <div className="w-full relative">
        <input type="text" className="w-full text-white input rounded-full text-sm pr-32 bg-gray-500" />
        <button type='submit' className="mx-2 absolute right-0 bottom-0 mr-2 mb-2 flex items-center bg-gray-500 p-2">
  <IoIosSend className='h-5 w-5 ' />
</button>

      </div>
    </form>
  );
};

export default MessageInput;
