import React from "react";

const UserCard = ({ user, onView }) => {
  return (
    <div className="border-none p-4 rounded bg-gray-800 text-gray-200">
      <h2 className="font-bold text-lg">{user.name}</h2>
      <p className="text-gray-400">{user.email}</p>
      <p className="text-gray-400">{user.company.name}</p>
      <p className="text-gray-400">{user.address.city}</p>

      <button
        className="mt-2 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-1 rounded cursor-pointer transition transform hover:scale-105"
        onClick={onView}
      >
        View Details
      </button>
    </div>
  );
};

export default UserCard;
