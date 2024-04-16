import React from 'react'
import useConversation from '../../Zustand/UseConversation';

const useSendMessage = () => {
    const { selectedConversation, setmessages, messages } = useConversation();

    const SendMessage = async (message) => {
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ message })
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            
            // Update messages array by adding the new message
            setmessages([...messages, data]); // Assuming `data` contains the new message
            console.log(data, "sended");
        } catch (error) {
            console.log(error);
        }
    }

    return { SendMessage };
}

export default useSendMessage;
