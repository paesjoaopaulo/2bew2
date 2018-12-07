import React, {Component} from 'react';
import './LogoutPage.css';
import Content from "../components/Content";

class LogoutPage extends Component {

    constructor(props) {
        super(props);
        let user = localStorage.getItem('user');

        if (user != undefined && user != null) {
            localStorage.removeItem('user');
            window.location = '/login';
        }
    }

    render() {
        return (
            <Content title={"Obrigado por usar o nosso sistema!"}></Content>
        );
    }
}

export default LogoutPage;
