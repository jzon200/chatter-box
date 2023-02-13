import { Outlet, createBrowserRouter } from "react-router-dom";
import ContactContent from "./components/ContactContent";
import ContactDetails from "./components/ContactDetails";
import ContactsSidebar from "./components/ContactsSidebar";
import ContactsProvider from "./context/ContactsProvider";
import SocketProvider from "./context/SocketProvider";
import NewContact from "./pages/NewContact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ContactContent />,
        children: [
          {
            path: "/new",
            element: <NewContact />,
          },
          { path: "/:contactId", element: <ContactDetails /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <SocketProvider>
      <ContactsProvider>
        <ContactsSidebar />
        <Outlet />
      </ContactsProvider>
    </SocketProvider>
  );
}
