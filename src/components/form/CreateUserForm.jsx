import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

function CreateUserForm({ onUserCreated }) {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://express-hosting.onrender.com/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, displayName, password }),
        }
      );

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
    <div>
      <h1 className="text-2xl text-green-400 text-center mb-4 border-b-2 border-green-500 pb-2">Create User</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ backgroundColor: "transparent" }}
            className="border ms-2 border-gray-600 rounded-md"
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
            className="border ms-2 border-gray-600 rounded-md"
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
            className="border ms-2 border-gray-600 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-green-800 border-2 border-green-400 rounded-md text-white font-bold px-4 mt-2 hover:bg-green-900 hover:border-green-600 flex items-center justify-center"
        >
          <FaPlusCircle className="mr-2" />
          CREATE USER
        </button>
      </form>
    </div>
  );
}

export default CreateUserForm;
