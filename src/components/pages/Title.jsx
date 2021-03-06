import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const Title = (props) => {
  return (
    <Typography
      component="h1"
      variant="h2"
      align="center"
      color="primary"
      gutterBottom
    >
      {props.children}
    </Typography>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
