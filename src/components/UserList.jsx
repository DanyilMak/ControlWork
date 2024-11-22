import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users, filter, onDelete }) => {
  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  return (
    <ul className="user-list">
      {filteredUsers.map((user) => (
        <UserItem key={user.id} user={user} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default UserList;
