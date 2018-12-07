import React, {Component} from 'react';
import './CadastroPage.css';
import Content from "../components/Content";

import axios from 'axios';
import Alert from "../components/Message";

class CadastroPage extends Component {

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
            password: '',
            password_confirm: ''
        });
    }

    changeNome(event) {
        this.setState({name: event.target.value})
    }

    changeLogin(event) {
        this.setState({login: event.target.value})
    }

    changePassword(event) {
        this.setState({password: event.target.value})
    }

    changePasswordConfirm(event) {
        this.setState({password_confirm: event.target.value})
    }

    submitForm(event) {
        event.preventDefault();
        axios.post('/api/users/register', {
            name: this.state.name,
            login: this.state.login,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        })
            .then((result) => {
                localStorage.setItem('user', result.data);
                window.location = '/';
            }).catch((err) => {
                console.log(err)
            }
        );
    }

    render() {
        return (
            <Content title={"Criar uma conta"}>
                <div className="CadastroPage">
                    <Alert alert={this.state.alert}/>
                    <form id={"form"} className={"form"}>

                        <div className={"form-group"}>
                            <label>Nome</label>
                            <input type='text' className={"form-control"} onChange={this.changeNome.bind(this)}/>
                        </div>

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
                            <label>Confirmar Senha</label>
                            <input type='password' className={"form-control"}
                                   onChange={this.changePasswordConfirm.bind(this)}/>
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

export default CadastroPage;
