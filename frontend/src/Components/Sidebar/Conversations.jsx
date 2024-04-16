import React from 'react'

import useConversation from '../../Zustand/UseConversation';
import { useSocketContext } from '../../context/SocketContext';


const Conversations = ({conversation,emoji}) => {
const {selectedConversation,setSelectedConversation} = useConversation();
const isSelected =  selectedConversation?._id === conversation._id;
const {onlineUser}= useSocketContext();
const isOnline = onlineUser.includes(conversation._id)
console.log(selectedConversation?._id,"kjbsx");

  return (
    <div className={`flex p-3 items-center hover:bg-blue-500 rounded-lg cursor-pointer ${isSelected ? "bg-sky-600" : ""}`}

    onClick={()=>setSelectedConversation(conversation)}
    >
      <div className={`avatar ${isOnline?"online":""}  p-2`}>
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div className='flex flex-col flex-1 items-center '>
    <div className='flex justify-between gap-14 ' >
        <p className='font-semibold text-slate-300'>{conversation.fullName}</p>
        <span className='text-xl'>{emoji}</span>
    </div>
</div>
      
    </div>
  )
}

export default Conversations
