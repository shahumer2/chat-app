import React, { useContext } from 'react'
import { createContext, useEffect, useState } from "react";

import {io}from "socket.io-client"
import { useAuthContext } from "./AuthContext";
const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider=({children})=>{
const [Socket, setSocket] = useState(null)
const [onlineUser, setonlineUser] = useState([])
// const authUser = React.useContext(AuthContext);
const { authUser } = useAuthContext();

useEffect(() => {
    if(authUser){
        const Socket =io("http://localhost:5000",{
            query:{
                userId:authUser?.authUser?._id
            }
        })
        console.log(authUser?.authUser._id,"log from sockettt");
        setSocket(Socket)
        //socket.on is used to listen to events can be sed both for client and server
        Socket.on("getOnlineUSers",(users)=>{
            setonlineUser(users)
        })
        return () => {
          Socket.close();
        }
    }
    else{
        if(Socket){
            Socket.close()
            setSocket(null)
        }
    }


}, [authUser])

    return(
        <SocketContext.Provider  value={{Socket,onlineUser}}>
            {children}
        </SocketContext.Provider>
    )
}