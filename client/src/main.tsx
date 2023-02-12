import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import ContactsProvider from "./context/ContactsProvider";
import SocketProvider from "./context/SocketProvider";
import "./index.css";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
  // <SocketProvider>
  //   <ContactsProvider>
  //     <App />
  //   </ContactsProvider>
  // </SocketProvider>
  // </RouterProvider>
);
