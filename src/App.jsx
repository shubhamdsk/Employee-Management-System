import React from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeDashboard from "./components/Dashboard/EmployeDashboard";

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      <EmployeDashboard />
    </div>
  );
};

export default App;
