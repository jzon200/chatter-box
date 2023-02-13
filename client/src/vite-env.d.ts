/// <reference types="vite/client" />

type User = {
  id: string;
  name: string;
};

type Message = {
  text: string;
  fromUser: boolean;
  isRead?: boolean;
};

type Contact = {
  id: string;
  //   user: User;
  messages: Message[];
};
