import React from 'react'
import Conversations from './Conversations'
import getCOnversation from './getConversation';
import { getRandomEmoji } from '../../utils/Emoji';

const Conversation = () => {
  const {conversation}=getCOnversation();
  return (
    <div className='flex flex-col overflow-auto max-h-[500px] w-[144px] md:w-full'> 
 {   conversation.map((convo)=>(
      <Conversations key={convo._id} conversation={convo} emoji={getRandomEmoji()}/>

    ))}
    </div>
  )
}

export default Conversation
