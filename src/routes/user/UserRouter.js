import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/user/Home";

const UserRouter = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    );
};

export default UserRouter;