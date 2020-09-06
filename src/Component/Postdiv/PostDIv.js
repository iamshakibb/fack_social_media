import React, { useState } from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

// material ui poststyle
const postStyle = makeStyles({
  paper: {
    border: "2px soild lightgray",
    borderRadius: "10px",
    width: "100%",
    minHeight: "200px",
    marginTop: "80px",
    padding: "30px",
  },
  title: {
    padding: "10px 0px",
    color: "#FF5733",
  },
  postBody: {
    color: "#000",
    paddingBottom: "15px",
  },
  postIconButton: {
    padding: "10px 20px",
    backgroundColor: "#fff",
    width: "100%",
    boxShadow: "none",
    border: "1px solid lightgray",
    borderRadius: "5px",
  },
  icon_name: {
    fontSize: "0.8em",
    paddingLeft: "10px",
  },
});

const PostDIv = (props) => {
  // destructuring props
  const { id, title, body } = props.randompost;
  const { likeButtonHandler, showbutton } = props;
  const [isItTrue, setIsItTrue] = useState(false);
  const likeOrNot = () => {
    if (isItTrue === false) {
      setIsItTrue(true);
      return isItTrue;
    } else {
      setIsItTrue(false);
      return isItTrue;
    }
  };
  const classes = postStyle();
  return (
    <Grid item xs={12} sm={10} md={8} key={id} id={`id-${id}`}>
      <Paper className={classes.paper}>
        <div className="title">
          <Typography variant="h5" gutterBottom className={classes.title}>
            {title}
          </Typography>
        </div>
        <div className="post">
          <Typography variant="body1" gutterBottom className={classes.postBody}>
            {body}
          </Typography>
        </div>
        {showbutton === true ? (
          <Grid container spacing={1} justify="center" alignItems="center">
            <Grid item xs={5}>
              <Button
                variant="contained"
                className={classes.postIconButton}
                type="button"
                onClick={() => {
                  likeOrNot();
                  likeButtonHandler(id, isItTrue);
                }}
              >
                <FontAwesomeIcon icon={faThumbsUp} />
                <span className={classes.icon_name}>{id + 20}</span>
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button
                className={classes.postIconButton}
                to={`/comment/user/${id}`}
                variant="contained"
                component={Link}
              >
                <FontAwesomeIcon icon={faComment} />
                <span className={classes.icon_name}>Comment</span>
              </Button>
            </Grid>
          </Grid>
        ) : null}
      </Paper>
    </Grid>
  );
};

export default PostDIv;
