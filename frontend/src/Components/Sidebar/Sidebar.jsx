import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput/>
      <div className='divider px-2'></div>
      <Conversation/>
      <LogoutButton/>
      {/* <Conversation/>
      <Logout/> */}
    </div>
  )
}

export default Sidebar
