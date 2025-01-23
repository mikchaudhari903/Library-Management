import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import UserRouter from "./routes/user/UserRouter";
function App() {
  return (
    <>
    <Router>
      <UserRouter />
    </Router>
    </>
  );
}

export default App;
