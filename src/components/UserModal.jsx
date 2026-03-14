import React from "react";
import { RxCross2 } from "react-icons/rx";

const UserModal = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-xs">
      <div className="bg-white w-[500px] rounded-lg shadow-lg p-6 relative">
        <button
          className="absolute top-2 right-3 text-xl font-bold cursor-pointer text-red-500"
          onClick={onClose}
        >
          <RxCross2 size={28} />
        </button>

        <h2 className="text-2xl font-bold mb-4">{user.name}</h2>

        <div className="space-y-2">
          <p>
            <b>Username:</b> {user.username}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Phone:</b> {user.phone}
          </p>
          <p>
            <b>Website:</b> {user.website}
          </p>

          <div className="mt-4">
            <h3 className="font-semibold text-lg">Address</h3>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.city}</p>
            <p>{user.address.zipcode}</p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <p>
              <b>Name:</b> {user.company.name}
            </p>
            <p>
              <b>Catchphrase:</b> {user.company.catchphrase}
            </p>
            <p>
              <b>BS:</b> {user.company.bs}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
