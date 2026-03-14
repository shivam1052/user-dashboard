import { useEffect } from "react";
import { userStore } from "../store/userStore.js";

const Dashboard = () => {
  const { users, getUser } = userStore();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="p-6 grid md:grid-cols-3 gap-4">
      {/* user1 */}
      <div className="border p-4 rounded shadow">
        <h2 className="font-bold text-lg">Username</h2>
        <p>User Email</p>
        <p>Comapny name</p>
        <p>User address</p>

        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
          View Details
        </button>
      </div>

      {/* user2 */}
      <div className="border p-4 rounded shadow">
        <h2 className="font-bold text-lg">Username</h2>
        <p>User Email</p>
        <p>Comapny name</p>
        <p>User address</p>

        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
          View Details
        </button>
      </div>

      {/* user3 */}
      <div className="border p-4 rounded shadow">
        <h2 className="font-bold text-lg">Username</h2>
        <p>User Email</p>
        <p>Comapny name</p>
        <p>User address</p>

        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
