import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import React from "react";
import AuthApi from "./context/AuthApi";
import Login from "./main/login";
import GroupCreate from "./main/groups/GroupCreate";
import Group from "./main/groups/Group";
import SurveyUsers from "./main/surveys/SurveyUsers";
import PostCreate from "./main/posts/PostCreate";
import Post from "./main/posts/Post";
import SurveyCreate from "./main/surveys/SurveyCreate";

function App() {
  const [auth, setAuth] = useState(false);
  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    }
  };
  useEffect(() => {
    readCookie();
  }, []);

  return (
    <div>
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/groups/create" element={<GroupCreate />} />
            <Route path="/groups" element={<Group />} />
            <Route path="/messages" element={<Post />} />
            <Route path="/create/messages" element={<PostCreate />} />
            <Route path="/surveys" element={<SurveyCreate />} />
            <Route path="/surveys/assign" element={<SurveyUsers />} />
          </Routes>
        </Router>
      </AuthApi.Provider>
    </div>
  );
}

export default App;
