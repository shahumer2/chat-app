import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';
import useConversation from '../../Zustand/UseConversation';
import { AuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    async function resetSelectedConversation() {
      try {
        await setSelectedConversation(null);
      } catch (error) {
        console.error('Error resetting selected conversation:', error);
      }
    }

    resetSelectedConversation();
  }, [setSelectedConversation]);

  return (
    <div className='flex flex-col w-[520px] md:min-w-[500px] overflow-auto h-[630px] md:h-full sm:h-[250px] '>
      {!selectedConversation ? <NoChatSelected /> : (
        <>
          <div className='bg-slate-500 px-4 mx-5 h-12'>
            <span>To:</span>
            <span className='text-gray-900 font-bold'>{selectedConversation?.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const authUser = React.useContext(AuthContext);
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser.authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};

export default MessageContainer;