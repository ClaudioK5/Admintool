import { useState, useEffect } from "react";

export default function ReadUsers({ users, isFetching }) {
  return (
    <div className="center-box">
      {isFetching && <p>Loading Users...</p>}
      {users.length > 0 ? (
        <div className="container">
          {users.map((user) => (
            <div className="small-box">
              <li key={user.id}>
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
          ))}
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
