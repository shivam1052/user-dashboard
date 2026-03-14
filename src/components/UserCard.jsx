import React from "react";

const UserCard = ({ user, onView }) => {
  return (
    <div className="border-none p-4 rounded shadow-lg shadow-blue-200">
      <h2 className="font-bold text-lg">{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.company.name}</p>
      <p>{user.address.city}</p>

      <button
        className="mt-2 bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-3 py-1 rounded cursor-pointer transition transform hover:scale-105"
        onClick={onView}
      >
        View Details
      </button>
    </div>
  );
};

export default UserCard;
