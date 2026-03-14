import Dashboard from "./pages/Dashboard.jsx";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Dashboard />
    </>
  );
};

export default App;
