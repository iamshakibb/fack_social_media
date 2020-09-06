import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography, Paper } from "@material-ui/core";
import axios from "axios";
import PostDIv from "../Postdiv/PostDIv";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Navbar/Navbar";

// material ui style
const commentImg = makeStyles({
  commentImg: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "auto",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  },
  paper: {
    border: "2px soild lightgray",
    borderRadius: "10px",
    width: "100%",
    minHeight: "200px",
    marginTop: "20px",
    padding: "30px",
  },

  name: {
    paddingBottom: "15px",
    color: "#02b875",
  },
  header: {
    paddingTop: "10px",
    color: "#02b875",
  },
});

const Comment = () => {
  const classes = commentImg();
  const { id } = useParams();
  // api call for post
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  // api call for comment
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then((res) => setComments(res.data));
  }, [id]);

  // random img genarator
  const imageURLs = [
    `https://source.unsplash.com/random/?man`,
    `https://source.unsplash.com/random/?anime`,
    `https://source.unsplash.com/random/?animal`,
    `https://source.unsplash.com/random/?cat`,
    `https://source.unsplash.com/random/?dog`,
    `https://source.unsplash.com/random/?nature`,
    `https://source.unsplash.com/random/?food`,
    `https://source.unsplash.com/random/?city`,
    `https://source.unsplash.com/random/?logo`,
  ];
  const getImageTag = () => {
    let randomIndex = Math.round(Math.random() * imageURLs.length);
    let img = imageURLs[randomIndex];
    return img;
  };
  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={2} justify="center" alignItems="center">
          <PostDIv randompost={post} showbutton={false}></PostDIv>
        </Grid>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={8}>
            <Typography variant="h6" gutterBottom className={classes.header} align="center">
              Comments
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center" alignItems="center">
          {comments.map((comment) => (
            <Grid item xs={12} sm={10} md={8} key={comment.id}>
              <Paper className={classes.paper}>
                <Grid container spacing={4} justify="center" alignItems="center">
                  <Grid item xs={12} sm={12} md={4}>
                    {<img alt="man" src={getImageTag()} className={classes.commentImg} />}
                  </Grid>
                  <Grid item xs={12} sm={12} md={8}>
                    <Typography variant="h6" gutterBottom className={classes.name}>
                      {comment.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Email :{comment.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" gutterBottom>
                      {comment.body}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Comment;
