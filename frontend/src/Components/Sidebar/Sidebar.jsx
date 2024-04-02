import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'
import Logout from './Logout'

const Sidebar = () => {
  return (
    <div>
      <SearchInput/>
      <div className='divider px-2'></div>
      <Conversation/>
      <Logout/>
      {/* <Conversation/>
      <Logout/> */}
    </div>
  )
}

export default Sidebar
