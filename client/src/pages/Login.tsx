import { useRef } from "react";
import Input from "../components/Input";
import { useSocket } from "../context/SocketProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const socket = useSocket();
  const usernameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <main className="grid place-items-center min-h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          socket.emit("login", {
            id: socket.id,
            name: usernameRef.current?.value,
          });

          navigate("/contacts");
        }}
        className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <Input
          ref={usernameRef}
          className="w-64 rounded-none"
          placeholder="Username"
          required
        />
        <button className="w-96 p-4 rounded-lg bg-primary text-white font-medium">
          Login
        </button>
      </form>
    </main>
  );
}
