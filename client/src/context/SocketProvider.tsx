import { ReactNode, createContext, useContext, useRef } from "react";
import { Socket, io } from "socket.io-client";

const SocketContext = createContext<Socket | null>(null);

export function useSocket() {
  return useContext(SocketContext)!;
}

type Props = {
  children: ReactNode;
};

export default function SocketProvider({ children }: Props) {
  // const [socket] = useState(io("http://localhost:3000"));
  const socketRef = useRef(io("http://localhost:3000"));
  const socket = socketRef.current;

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
