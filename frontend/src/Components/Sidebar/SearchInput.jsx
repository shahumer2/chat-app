import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../Zustand/UseConversation';
import getCOnversation from './getConversation';
import toast from 'react-hot-toast';
const SearchInput = () => {
  const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversation } = getCOnversation();

	const handleSubmit = (e) => {
		e.preventDefault();
    console.log("meinreturn");
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversations = conversation.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversations) {
			setSelectedConversation(conversations);
			setSearch("");
		} else toast.error("No such user found!");
	};
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex gap-2'>
        <input type='text' placeholder='Search' className='input input-bordered rounded-full bg-gray-600 text-white' 
        value={search}
				onChange={(e) => setSearch(e.target.value)}/>
        <button className='btn btn-circle bg-sky-400'>
        <FaSearch/>
        </button>
       
      </form>
    </div>
  )
}

export default SearchInput
