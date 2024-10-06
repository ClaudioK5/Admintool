import "./styles.css";
import ReadUsers from "./components/services/ReadUsers.jsx";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./components/layout/HomePage";
import AddUser from "./components/services/AddUser";
import UpdateUser from "./components/services/UpdateUser";
import DeleteUser from "./components/services/DeleteUser";
import GetUser from "./components/services/GetUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const getAllUsersUrl = "http://localhost:3000/v1/users/all";
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <HomePage /> },
        {
          path: "all users",
          element: <ReadUsers users={users} isFetching={isFetching} />,
        },
        { path: "add user", element: <AddUser /> },
        { path: "delete user", element: <DeleteUser /> },
        { path: "get user", element: <GetUser /> },
        { path: "update user", element: <UpdateUser /> },
      ],
    },
  ]);

  const fetchUsers = async () => {
    try {
      setIsFetching(true);
      const response = await fetch(getAllUsersUrl);
      const data = await response.json();
      console.log(data);
      setUsers(data);
      setIsFetching(false);
    } catch (error) {
      console.error("Error fetching the users:", error);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}
