import React from "react";
import { withStyles } from "@material-ui/core/styles";

const style = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    textOverflow: "hidden",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    height : "150px",
    width : "100%",
    borderRadius : "5px",
    overflow : "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  minicolorBoxes :{
    height : "25%",
    width : "20%",
    display : "inline-block",
    position : "relative",
    marginBottom : "-4.5px"
  }
};

const MiniPallet = props => {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(c => (
    <div
      className={classes.minicolorBoxes}
      style={{ backgroundColor: c.color }}
      key={c.name}
    ></div>
  ));
  return (
    <div className={classes.root}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(style)(MiniPallet);
