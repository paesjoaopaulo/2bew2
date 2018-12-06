import React, {Component} from 'react';
import './LoginPage.css';

class LoginPage extends Component {
    componentWillMount() {
        this.setState({
            login: '',
            password: ''
        });
    }

    componentDidMount() {
        console.log("entrou")
        fetch('/api/audios').then((audios) => {
            console.log(audios)
            return audios.map((audio) => {
                console.log(audio);
                return audio;
            });
        }).catch((err) => {
            console.error(err);
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
        console.log(this.state);
    }

    render() {
        return (
            <div className="LoginPage">
                <h1>Fazer login</h1>

                <form>
                    <label>Login</label>
                    <input type='text' onChange={this.changeLogin.bind(this)}/>

                    <label>Senha</label>
                    <input type='password' onChange={this.changePassword.bind(this)}/>

                    <button type='button' onClick={this.submitForm.bind(this)}>Login</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;
