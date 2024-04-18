import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const authUser = useContext(AuthContext);
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);

	useEffect(() => {
		if (authUser) {
			const newSocket = io("http://localhost:5000", {
				query: {
					userId: authUser.authUser._id,
				},
			});

			setSocket(newSocket);

			newSocket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			return () => newSocket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [authUser]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
