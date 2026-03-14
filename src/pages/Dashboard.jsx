import { useEffect, useState } from "react";
import { userStore } from "../store/userStore.js";
import UserCard from "../components/UserCard.jsx";
import UserModal from "../components/UserModal.jsx";

const Dashboard = () => {
  const { users, getUser, loading, error } = userStore();

  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const filterUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        User Dashboard
      </h1>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search user"
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-400 
               transition"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* User grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {loading ? (
          <div className="col-span-3 flex justify-center mt-10">
            <div className="animate-spin rounded-full h-14 w-14 border-6 border-blue-500 border-t-transparent"></div>
          </div>
        ) : filterUsers.length > 0 ? (
          filterUsers.map((user) => (
            <UserCard
              user={user}
              key={user.id}
              onView={() => setSelectedUser(user)}
            />
          ))
        ) : error ? (
          <p className="text-red-500 text-center col-span-3">{error}</p>
        ) : (
          <p className="text-gray-500 text-center col-span-3">No users found</p>
        )}
      </div>

      {/* UserModal */}
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default Dashboard;
