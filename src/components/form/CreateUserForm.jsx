import { useState } from "react";

function CreateUserForm({ onUserCreated }) {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://express-hosting.onrender.com/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, displayName, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      setUsername("");
      setDisplayName("");
      setPassword("");

      onUserCreated();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="text-2xl text-green-400">Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ backgroundColor: "transparent" }}
          />
        </div>
        <div>
          <label htmlFor="displayName">Display Name:</label>
          <input
            type="text"
            id="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            style={{ backgroundColor: "transparent" }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ backgroundColor: "transparent" }}
          />
        </div>
        <button type="submit" className="bg-green-800 border-2 border-green-400 rounded-md text-white font-bold px-4 mt-2 hover:bg-green-900 hover:border-green-600">CREATE USER</button>
      </form>
    </>
  );
}

export default CreateUserForm;
