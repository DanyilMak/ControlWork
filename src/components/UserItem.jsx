import React from "react";

const UserItem = ({ user, onDelete }) => {
  return (
    <li className="user-item">
      <div className="user-info">
        <img
          className="user-avatar"
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
        />
        <span>
          {user.first_name} {user.last_name}
        </span>
      </div>
      <button className="delete-button" onClick={() => onDelete(user.id)}>
        Delete
      </button>
    </li>
  );
};

export default UserItem;
