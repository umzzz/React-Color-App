import React, { Component } from "react";
import MiniPallet from "./MiniPallet";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: 'flex',
    alignItems : "flex-start",
    justifyContent : "center"
  },
  container :{
      width : "50%",
      display : "flex",
      alignItems : "flex-start",
      flexDirection : "column",
      flexWrap : "wrap"
      
  },
  nav:{
      display : "flex",
      width : "100%",
      justifyContent : "space-between",
      color : "white"
  },
  pallet:{
      boxSizing : "border-box",
      width : "100%",
      display : "grid",
      gridTemplateColumns : "repeat(3,30%)",
      gridGap : "5%"
  }
};
class PalletList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { pallets, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>List of Pallets</h1>
          </nav>
          <div className={classes.pallet}>
            {pallets.map(p => (
              <MiniPallet {...p} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PalletList);
