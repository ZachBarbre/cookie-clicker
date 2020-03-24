import React, { Component } from "react";
import logo from '../logo.svg';
import '../App.css';

class CounterState extends Component {
    constructor(props) {
        super();
        this.state = { 
            clicks: 0, 
            spinSpeed: 20
        };
        this.incrementClicks = async () => {
            await this.setState({ clicks: this.state.clicks + 1 });
            await this.checkClicks();
        }
        this.decrementClicks = async () => {
            await this.setState({ clicks: this.state.clicks - 1 })
            await this.checkClicks();

        }
        this.checkClicks = () => {
            switch(true) {
                case this.state.clicks <= 5:
                    this.setState({ spinSpeed: 20 });
                    break;
                case this.state.clicks <= 10:
                    this.setState({ spinSpeed: 20 });
                    break;
                case this.state.clicks <= 15:
                    this.setState({ spinSpeed: 10 });
                    break;
                case this.state.clicks <= 20:
                    this.setState({ spinSpeed: 5 });
                    break;
                default:
                    this.setState({ spinSpeed: 1 });
            }
        }
    }
    render() {
        return (
        <div>
            <img style={{animation: `App-logo-spin infinite ${this.state.spinSpeed}s linear`}} src={logo} className="App-logo" alt="logo" />
            <p>Speed: {this.state.spinSpeed}</p>
            <p>Number of Click is: {this.state.clicks}</p>
            <button onClick={this.incrementClicks}>Speed Up</button>
            <button onClick={this.decrementClicks}>Slow Down</button>
        </div>
        )
    }
} 

export default CounterState;