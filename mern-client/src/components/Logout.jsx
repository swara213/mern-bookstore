import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} = useContext(AuthContext) ; 
    const location = useLocation() ; 
    const navigate = useNavigate() ; 

    const from = location.state?.from?.pathname || "/"
    const handleLogout = ()=> { 
        logOut().then(() => {
            // Sign-out successful.
            alert("LOGOUT SUCCESSFULL!") ; 
          }).catch((error) => {
            // An error happened.
          });
    }   
  return (
    <div className='h-screen bg-[#F3EAD9] flex items-center justify-center'>
      <button className='bg-yellow-500 px-8 py-2 rounded ' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
