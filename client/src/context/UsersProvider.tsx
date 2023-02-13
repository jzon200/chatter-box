import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSocket } from "./SocketProvider";

const UsersContext = createContext<User[] | null>(null);

export function useUsers() {
  return useContext(UsersContext)!;
}

type Props = {
  children: ReactNode;
};

export default function UsersProvider({ children }: Props) {
  const socket = useSocket();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    socket.on("users", (user: User) => {
      setUsers([...users, user]);
    });
  }, [users]);

  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
}
