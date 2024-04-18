import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const getCOnversation = () => {

    const [conversation, setconversation] = useState([])
    useEffect(() => {

        const getConversations=async()=>{
            try {
                const res= await fetch(`/api/user/userforsidebar`)
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error)
                }
                setconversation(data)
            
                
            } catch (error) {
                toast.error(error)
            }


        }
        getConversations();
     
    }, [])
    
  return {conversation};
}

export default getCOnversation
