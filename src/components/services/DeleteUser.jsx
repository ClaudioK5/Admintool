import { useState } from "react";
import { toast } from "react-toastify";

export default function DeleteUser() {
  const [userId, setUserId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!userId) {
      console.error("user id is required to delete the user");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/v1/users/" + userId, {
        method: "DELETE",
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(`User ${userId} has been deleted.`);
        console.log(`user with id ${userId} has been deleted successfully.`);
        setUserId("");
      } else {
        toast.error(`User ${userId} not found.`);
        console.error("error deleting user:", result.message);
      }
    } catch (error) {
      console.error("request failed: error");
    }
  };

  return (
    <div className="center-box">
      <form onSubmit={handleDelete}>
        <ul>
          <label>Enter User Id to delete:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />

          <button type="submit">Delete User</button>
        </ul>
      </form>
    </div>
  );
}
