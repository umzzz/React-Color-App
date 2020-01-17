import React, { Component } from 'react';
import ColorBox from './ColorBox'
import Navbar from './NavBar'
import './Pallet.css';


class Pallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }
    changeLevel(newLevel) {
        this.setState({ level: newLevel })
    }
    changeFormat(val) {
        this.setState({
            format: val
        })
    }
    render() {
        const palette = this.props.palette
        const { level, format } = this.state
        const colorBoxes = palette.colors[level].map(c => (
            <ColorBox background={c[format]} name={c.name} key = {c.id}/>
        ))
        return (
            <div className="Pallet">
                <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} />
                <div className="Pallet-color">
                    {colorBoxes}
                </div>
                <footer className="Pallet-fotter" >{palette.paletteName}
                    <span className = "emoji">
                        {palette.emoji}
                    </span>
                </footer>
            </div>
        );
    }
}

export default Pallet;