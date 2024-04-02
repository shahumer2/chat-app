import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
const MessageContainer = () => {
 const noChatSelected=true;
  return (
    <div flex flex-col className=' md:min-w-[500px]'>
      {
noChatSelected?<NoChatSelected/>:(
  <>

  <div className='bg-slate-500 px-4 mx-5 h-12 '>
    <span>To :</span>
    <span className='text-gray-900 font-bold'>Shah Umer</span>

  </div>
  <Messages/>
  <MessageInput/>
  </>

)
      }
    
    </div>
  )
}
const NoChatSelected = () => {
	
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 Shah Umer ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

export default MessageContainer
