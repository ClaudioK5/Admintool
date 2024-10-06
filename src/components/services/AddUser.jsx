import { useState } from "react";
import { toast } from "react-toastify";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      city,
      country,
    };

    try {
      const response = await fetch("http://localhost:3000/v1/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("User has been created!");
        console.log("user added successfully!");
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
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
