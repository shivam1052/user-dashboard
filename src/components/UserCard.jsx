import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold text-lg">{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.company.name}</p>
      <p>{user.address.city}</p>

      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded cursor-pointer">
        View Details
      </button>
    </div>
  );
};

export default UserCard;
