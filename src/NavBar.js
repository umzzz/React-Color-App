import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { Select, MenuItem, Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleChange(e) {
    this.setState({
      format: e.target.value,
      open: true
    });
    this.props.changeFormat(e.target.value);
  }
  closeSnackbar() {
    this.setState({
      open: false
    });
  }
  render() {
    const { level, changeLevel } = this.props;
    const { format, open } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">React Color picker</Link>
        </div>
        <div className="slider-container">
          <span>level :{level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container"></div>
        <Select onChange={this.handleChange} value={format}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
        </Select>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={1000}
          message={<span id="message-id">Format Changed</span>}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton onClick={this.closeSnackbar}>
              <CloseIcon key="close" aria-label="close" />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default NavBar;
