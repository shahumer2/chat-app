import React, { useEffect } from 'react'
import { useSocketContext } from '../../context/SocketContext'
import useConversation from '../../Zustand/UseConversation';
import notificationSound from "../../assets/Sound/notification.mp3"
const useListenMessage = () => {

const{socket} = useSocketContext();
const {messages, setmessages}= useConversation();
useEffect(() => {
socket?.on("newMessage",(newMessage)=>{
    newMessage.shouldShake=true;
    const sound = new Audio(notificationSound)
    sound.play();
    setmessages([...messages,newMessage])
})
return ()=> socket.off("newMessage") 
}, [setmessages,socket,messages])

}

export default useListenMessage
