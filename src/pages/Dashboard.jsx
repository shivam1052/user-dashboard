import { useEffect, useState } from "react";
import { userStore } from "../store/userStore.js";
import UserCard from "../components/UserCard.jsx";

const Dashboard = () => {
  const { users, getUser, loading, error } = userStore();

  const [search, setSearch] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const filterUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">User Dashboard</h1>

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
          filterUsers.map((user) => <UserCard user={user} key={user.id} />)
        ) : error ? (
          <p className="text-red-500 text-center col-span-3">{error}</p>
        ) : (
          <p className="text-gray-500 text-center col-span-3">No users found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
