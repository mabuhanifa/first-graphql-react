import React, { useState } from "react";

export default function Form() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const addUser =()=>{

  }
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="form">
      <h1>Add New User</h1>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <button onClick={addUser}>Add</button>
      {error && "Something went wrong!"}
    </div>
  );
}
