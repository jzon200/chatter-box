type Message = {
  text: string;
  fromUser: boolean;
};

type Contact = {
  id: string;
  messages: Message[];
};
