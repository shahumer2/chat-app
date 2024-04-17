import React from 'react';
import SearchInput from './SearchInput';
import Conversation from './Conversation';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-1 flex flex-col h-full w-[300px] md:w-full overflow-auto '>
      <SearchInput />
      <div className='divider px-2'></div>
      <Conversation />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
