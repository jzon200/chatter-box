import Avatar from "./Avatar";

export default function ContactList() {
  return (
    <div className="flex flex-col gap-2 max-h-[50rem] h-full pr-2 overflow-y-auto">
      <ContactList.Item isRead />
      <ContactList.Item />
      <ContactList.Item isRead />
      <ContactList.Item />
      <ContactList.Item isRead />
      <ContactList.Item />
      <ContactList.Item isRead />
      <ContactList.Item />
      <ContactList.Item isRead />
      <ContactList.Item />
      <ContactList.Item isRead />
      <ContactList.Item />
    </div>
  );
}

type ContactListItemProps = {
  isRead?: boolean;
};

ContactList.Item = ({ isRead }: ContactListItemProps) => {
  return (
    <div className="flex items-center gap-2 p-4 rounded-lg hover:bg-gray-2 shadow shadow-neutral-300 cursor-pointer">
      <Avatar imageUrl="/images/kuro.jpg" />
      <div className={`${!isRead && "font-bold"}`}>
        <div>Kuro</div>
        <div className="w-64 text-xs line-clamp-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas
          quos? Ipsa distinctio ipsam tempora, recusandae facilis vitae
          perspiciatis eaque error architecto fuga facere possimus obcaecati aut
          ipsum consequuntur dicta.
        </div>
      </div>
      {!isRead && <div className="w-3 h-3 rounded-[50%] bg-primary" />}
    </div>
  );
};
