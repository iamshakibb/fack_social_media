import React, { useContext } from "react";
import { Grid, Container } from "@material-ui/core";
import { PostContext } from "../../App";
import PostDIv from "../Postdiv/PostDIv";

const PostSection = (props) => {
  const posts = useContext(PostContext);
  // slicking the post array
  const randomPosts = posts.slice(0, 12);
  return (
    <>
      <Container>
        <Grid container spacing={2} justify="center" alignItems="center">
          {/* dynamic post  */}
          {randomPosts.map((randomPost) => (
            <PostDIv
              randompost={randomPost}
              likeButtonHandler={props.likeButtonHandler}
              key={randomPost.id}
              showbutton={true}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PostSection;
