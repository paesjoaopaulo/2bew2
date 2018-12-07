import React, {Component} from 'react';
import './LoginPage.css';
import Content from "../components/Content";

import axios from 'axios';
import Alert from "../components/Message";

class LoginPage extends Component {

    constructor(props) {
        super(props);
        let user = localStorage.getItem('user');

        if (user != undefined && user != null) {
            window.location = '/';
        }
    }

    componentWillMount() {
        this.setState({
            login: '',
            password: ''
        });
    }

    changeLogin(event) {
        this.setState({login: event.target.value})
    }

    changePassword(event) {
        this.setState({password: event.target.value})
    }

    submitForm(event) {
        event.preventDefault();
        axios.post('/api/users/login', {login: this.state.login, password: this.state.password})
            .then((result) => {
                localStorage.setItem('user', result.data);
                window.location = '/';
            }).catch((err) => {
                this.setState({
                    alert: {
                        message: "Credenciais inválidas",
                        type: 'danger'
                    }
                })
            }
        );
    }

    render() {
        return (
            <Content title={"Fazer login"}>
                <div className="LoginPage">
                    <Alert alert={this.state.alert}/>
                    <form id={"form"} className={"form"}>
                        <div className={"form-group"}>
                            <label>Login</label>
                            <input type='text' className={"form-control"} onChange={this.changeLogin.bind(this)}/>
                        </div>

                        <div className={"form-group"}>
                            <label>Senha</label>
                            <input type='password' className={"form-control"}
                                   onChange={this.changePassword.bind(this)}/>
                        </div>

                        <div className={"form-group"}>
                            <button type='button' className={"btn btn-primary"}
                                    onClick={this.submitForm.bind(this)}>Login
                            </button>
                        </div>
                    </form>
                </div>
            </Content>
        );
    }
}

export default LoginPage;
