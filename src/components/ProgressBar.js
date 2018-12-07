import React, {Component} from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.value > 0 && this.props.value < 100) {
            return (
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{"width": this.props.value + "%"}}
                        aria-valuenow={this.props.value}
                        aria-valuemin="0" aria-valuemax="100"
                    >
                    </div>
                </div>
            );
        } else {
            return (<div></div>)
        }
    }
}

export default ProgressBar;
