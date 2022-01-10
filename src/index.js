import React from "react";
import ReactDOM from "react-dom";
import GeoLocation from "./geoLoc";

class App extends React.Component {
    state = {
        lat: null,
        lnt: null,
        errMessage: '',
        userName: ''
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
                this.setState({ lnt: position.coords.longitude })
                this.setState({ userName: userName })
            },
            err => this.setState({ errMessage: err.message })
            )
            let userName = prompt("what your name ?");
    }
    render() {

        if (this.state.errMessage && !this.state.lat) {
            return <div className="app">Error: { this.state.errMessage }</div>
        } else if (!this.state.errMessage && this.state.lat) {
            return (
                <div className="app">
                    <h1>Hello { this.state.userName }.</h1>
                    <GeoLocation lat={ this.state.lat } lnt={this.state.lnt}/>

                    <div className="btm_corner">
                        <p>{this.state.lat}</p>
                        <p>{this.state.lnt}</p>
                    </div>

                    <div className="top_right">
                            <a href="https://twitter.com/ullaskunder3">💕</a>
                    </div>
                    <div className="btm_left">
                            <a href="https://github.com/ullaskunder3">📎</a>
                    </div>
                </div>
            )
        } else {
            return <div className="app">Loading:</div>
        }

    }
}

ReactDOM.render(<App />, document.querySelector('#root'));