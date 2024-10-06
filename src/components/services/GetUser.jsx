import { useState } from "react";
import { toast } from "react-toastify";

export default function GetUser() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);

  const fetchUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/v1/users/" + userId);
      const data = await response.json();

      if (response.ok) {
        toast.success("User has been found!");
        setUserId("");

        setUser(data.data);
      } else {
        toast.error("User not found");
        setUserId("");
      }
    } catch (error) {
      console.error("Error fetching the users:", error);
    }
  };

  return (
    <div className="center-box">
      <form onSubmit={fetchUser}>
        <ul>
          <label>Enter User Id:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />

          <button type="submit">Search</button>
          {user && (
            <div className="small-box">
              <li>
                <p>
                  <strong>Id: </strong>
                  {user.id}
                </p>
                <p>
                  <strong>Name: </strong>
                  {user.name}
                </p>
                <p>
                  <strong>Email: </strong>
                  {user.email}
                </p>
                <p>
                  <strong>City: </strong>
                  {user.city}
                </p>
                <p>
                  <strong>Country: </strong>
                  {user.country}
                </p>
              </li>
            </div>
          )}
        </ul>
      </form>
    </div>
  );
}
