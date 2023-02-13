import { Outlet, createBrowserRouter } from "react-router-dom";
import ContactDetails from "./components/ContactDetails";
import ContactsProvider from "./context/ContactsProvider";
import SocketProvider from "./context/SocketProvider";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import NewContact from "./pages/NewContact";
import UsersProvider from "./context/UsersProvider";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      {
        path: "/contacts",
        element: <Contacts />,
        children: [
          {
            path: "/contacts/new",
            element: <NewContact />,
          },
          { path: "/contacts/:contactId", element: <ContactDetails /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <SocketProvider>
      <UsersProvider>
        <ContactsProvider>
          <Outlet />
        </ContactsProvider>
      </UsersProvider>
    </SocketProvider>
  );
}
