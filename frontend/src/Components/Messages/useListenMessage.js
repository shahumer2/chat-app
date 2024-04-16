import React, { useEffect } from 'react'
import { useSocketContext } from '../../context/SocketContext'
import useConversation from '../../Zustand/UseConversation';
import notificationSound from "../../assets/Sound/notification.mp3"
const useListenMessage = () => {

const{Socket} = useSocketContext();
const {messages, setmessages}= useConversation();
useEffect(() => {
Socket?.on("newMessage",(newMessage)=>{
    newMessage.shouldShake=true;
    const sound = new Audio(notificationSound)
    sound.play();
    setmessages([...messages,newMessage])
})
return ()=> Socket.off("newMessage")
}, [setmessages,Socket,messages])

}

export default useListenMessage
