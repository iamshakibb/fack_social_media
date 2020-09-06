import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import PostSection from "../PostSection/PostSection";
import { PostContext } from "../../App";
const Home = () => {
  const posts = useContext(PostContext);

  // like button handler
  const likeButtonHandler = (id, isItTrue) => {
    const newposts = posts.find((post) => post.id === id);
    let likes = document.querySelector(`#id-${newposts.id} button span span`);
    if (isItTrue === true) {
      let newlike = Math.round(likes.textContent) - 1;
      likes.innerText = newlike;
    } else {
      let newlike = Math.round(likes.textContent) + 1;
      likes.textContent = newlike;
    }
  };
  return (
    <>
      <Navbar />
      <PostSection likeButtonHandler={likeButtonHandler} />
    </>
  );
};

export default Home;
