import { useState, useEffect } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setUsers([]);
        const response = await fetch("https://express-hosting.onrender.com/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchUsers();
  }, []);

  return (
    <div className="mt-8">
      <h1 className="text-center">Users List</h1>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="py-4 ps-16 pe-4 border rounded-lg border-gray-600 mb-1 text-sm font-bold"
          >
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div>
                  username :{" "}
                  <span className="text-green-400">&quot;{user.username}&quot;</span>
                </div>
              </div>
            </div>
            <div>
              displayName :{" "}
              <span className="text-green-400">&quot;{user.displayName}&quot;</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
