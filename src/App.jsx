import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import FilterBox from "./components/FilterBox";
import { getUsers, deleteUser } from "./apiMethods";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="App">
      <h2>Users from API:</h2>
      <button onClick={fetchUsers}>Reload Users</button>
      <FilterBox filter={filter} setFilter={setFilter} />
      <UserList users={users} filter={filter} onDelete={handleDelete} />
    </div>
  );
};

export default App;
