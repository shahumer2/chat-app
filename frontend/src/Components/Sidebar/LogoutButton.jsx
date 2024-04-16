import React from 'react'
import { CiLogout } from "react-icons/ci";
import UseLogout from "../../pages/Logout/UseLogout.jsx"
const LogoutButton = () => {
const {logout}=UseLogout()
  return (
    <div className='fixed bottom-0 left-0 p-4 w-20 h-15 text-white cursor-pointer'>
      <CiLogout onClick={logout}/>
    </div>
  )
}

export default LogoutButton
