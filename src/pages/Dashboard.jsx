import { useEffect } from "react";
import { userStore } from "../store/userStore.js";

const Dashboard = () => {
  const { users, getUser } = userStore();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div>
        <h2>Username</h2>
        <p>User Email</p>
        <p>Comapny name</p>
        <p>User address</p>

        <button>View Details</button>
      </div>
    </div>
  );
};

export default Dashboard;
