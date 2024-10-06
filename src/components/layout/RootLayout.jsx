import { Outlet, Link } from "react-router-dom";
import classes from "./Rootlayoutclass.css";

export default function RootLayout() {
  return (
    <div className="container2">
      <div className="center-box">
        <h2>Hello Customer</h2>
        <header className={classes.header}>
          <nav>
            <ul className={classes.list}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/all users">Products</Link>
              </li>
              <li>
                <Link to="/add user">Add new User</Link>
              </li>
              <li>
                <Link to="/delete user">Delete user</Link>
              </li>
              <li>
                <Link to="/get user">Find user</Link>
              </li>
              <li>
                <Link to="/update user">Edit user</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Outlet />
    </div>
  );
}
