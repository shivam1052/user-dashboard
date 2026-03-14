import { useState, useEffect } from "react";
import { userStore } from "./store/userStore.js";
const App = () => {
  const { users, getUser } = userStore();

  useEffect(() => {
    getUser();
  }, []);

  console.log(users.length);
  return <div>App</div>;
};

export default App;
