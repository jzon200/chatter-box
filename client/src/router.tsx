import { Outlet, createBrowserRouter } from "react-router-dom";
import ContactsProvider from "./context/ContactsProvider";
import SocketProvider from "./context/SocketProvider";
import ContactsLayout from "./layouts/RootLayout";
import NewContact from "./pages/NewContact";
import ContactContent from "./components/ContactContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ContextWrapper />,
    children: [
      {
        path: "/contacts",
        element: <ContactsLayout />,
        children: [
          {
            path: "new",
            element: <NewContact />,
          },
          { path: ":contactId", element: <ContactContent /> },
        ],
      },
    ],
  },
]);

function ContextWrapper() {
  return (
    <SocketProvider>
      <ContactsProvider>
        <Outlet />
      </ContactsProvider>
    </SocketProvider>
  );
}
