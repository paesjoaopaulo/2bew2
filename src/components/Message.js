import React, {Component} from 'react';
import './Message.css';

class Alert extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.alert != null && this.props.alert != undefined) {
            return (
                <div
                    className={"alert alert-" + this.props.alert.type + " " + (this.props.alert.message.length == 0) ? "hide" : ""}>
                    {this.props.alert.message}
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

export default Alert;
