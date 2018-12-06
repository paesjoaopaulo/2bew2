import React, {Component} from 'react';
import './LoginPage.css';

import Top from "../components/Top";

class ErrorPage extends Component {

    render() {
        return (
            <div className="ErrorPage">
                <Top/>
                <code>Error</code>
            </div>
        );
    }
}

export default ErrorPage;
