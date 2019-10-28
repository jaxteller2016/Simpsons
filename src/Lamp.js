// Lamp.js
import React, {Component} from 'react';

class Lamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false
        };
    }
    handleClick = () => {
        this.setState({ on: !this.state.on });
        console.log(`Button clicked`);
    };
    render() {
        const light = this.state.on? "on": "off";
        return (
            <div
                className="Lamp">
                <button className={light}>{light.toUpperCase()}</button>
                <figure className={light} />
                <button onClick={this.handleClick} className={light}>
                    {light.toUpperCase()}
                </button>

            </div>
        );
    }
}

export default Lamp;