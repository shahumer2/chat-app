import React, { useEffect, useState } from 'react'
import useConversation from '../../Zustand/UseConversation'

const UseGetMessages = () => {
 const{messages,setmessages,selectedConversation} =  useConversation();

 useEffect(() => {
  const getMessages= async()=>{
    const res = await fetch(`/api/messages/${selectedConversation?._id}`)
    const data = await res.json();
    if(data.error){
      throw new Error("error while getting messages")
    }
    setmessages(data)
  }
if(selectedConversation._id) 
  getMessages();
 }, [selectedConversation?._id])
 
  return {messages}
}

export default UseGetMessages
