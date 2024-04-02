import React from 'react'

const Conversations = () => {
  return (
    <div className='flex p-3 items-center hover:bg-blue-500 rounded-lg cursor-pointer'>
      <div className="avatar online  p-2">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div className='flex flex-col flex-1 items-center '>
    <div className='flex justify-between gap-14'>
        <p className='font-semibold text-slate-300'>Shah Umer</p>
        <span className='text-xl'>🤷‍♂️</span>
    </div>
</div>
      
    </div>
  )
}

export default Conversations
