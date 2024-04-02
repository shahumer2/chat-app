import React from 'react'
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <div>
      <form className='flex gap-2'>
        <input type='text' placeholder='Search' className='input input-bordered rounded-full bg-gray-600 text-white'/>
        <button className='btn btn-circle bg-sky-400'>
        <FaSearch/>
        </button>
       
      </form>
    </div>
  )
}

export default SearchInput
