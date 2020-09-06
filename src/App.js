import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from "./Component/NoMatch/NoMatch";
import Comment from "./Component/Comment/Comment";
import axios from "axios";

export const PostContext = createContext();
// shuffle the api data
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function App() {
  // calling post api
  const [posts, setposts] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
      const data = response.data;
      shuffleArray(data);
      setposts(data);
    });
  }, []);
  return (
    <>
      <Router>
        <PostContext.Provider value={posts}>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/comment/user/:id">
              <Comment />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </PostContext.Provider>
      </Router>
    </>
  );
}

export default App;
