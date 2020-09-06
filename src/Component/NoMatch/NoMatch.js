import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const notmathcStyle = makeStyles({
  NotMatchHeader: {
    marginTop: "25%",
    color: "red",
  },
});

const NoMatch = () => {
  const classes = notmathcStyle();
  return (
    <div>
      <Typography variant="h1" gutterBottom align="center" className={classes.NotMatchHeader}>
        Sorry , Not Found
      </Typography>
    </div>
  );
};

export default NoMatch;
