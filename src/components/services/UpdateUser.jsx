import { useState } from "react";
import { toast } from "react-toastify";

export default function UpdateUser() {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      name,
      email,
      city,
      country,
    };

    try {
      const response = await fetch(
        "http://localhost:3000/v1/update/" + userId,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      const result = await response.json();
      if (response.ok) {
        toast.success("User has been updated!");
        console.log("user updated successfully!");
        setName("");
        setEmail("");
        setCity("");
        setCountry("");
      } else {
        toast.error("An error occurred while submitting the request.");
        console.error("error adding user:", result.message);
      }
    } catch (error) {
      console.error("request failed:", error);
    }
  };

  return (
    <div className="center-box">
      <form onSubmit={handleSubmit}>
        <ul>
          <label>User Id</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <label>Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </ul>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}
