import React, {Component} from 'react';
import './CreateAudio.css';

import Sidebar from "../components/Sidebar";
import Top from "../components/Top";
import Content from "../components/Content";

import axios from 'axios';
import Alert from "../components/Message";
import ProgressBar from "../components/ProgressBar";

var Loader = require('react-loader');

class CreateAudio extends Component {

    constructor(props) {
        super(props);
        this.file = null;
        this.titulo = null;
        this.descricao = null;
        this.state = {loaded: 0};

        let user = localStorage.getItem('user');

        if (user != undefined && user != null) {
            window.location = '/';
        }
    }

    componentWillMount() {
        this.setState({showLoader: false})
    }

    changeFile = (event) => {
        this.file = event.target.files[0]
    }

    changeDescricao = (event) => {
        this.descricao = event.target.value
    }

    changeTitulo = (event) => {
        this.titulo = event.target.value
    }


    submit = (event) => {

        const button = event.target

        const data = new FormData()
        if (this.file != null) {
            data.append('audio', this.file, this.file.name);
        } else {
            this.setState({
                loaded: 0, alert: {type: 'danger', message: 'Ocorreu um problema no cadastro de áudios!'}
            })
            return false;
        }
        data.append('descricao', this.descricao);
        data.append('titulo', this.titulo);

        axios
            .post('/api/audios', data, {
                onUploadProgress: ProgressEvent => {
                    this.setState({
                        loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
                    })
                    console.log(this.state.loaded)
                },
            })
            .then(res => {
                if (res.status === 200) {
                    this.setState({loaded: 0, alert: {type: 'success', message: 'Áudio cadastrado com sucesso!'}})
                } else {
                    this.setState({
                        loaded: 0, alert: {type: 'danger', message: 'Ocorreu um problema no cadastro de áudios!'}
                    })
                }
            })
    }

    render() {
        return (
            <div className="CreateAudio">
                <Top/>
                <Sidebar/>
                <Loader loaded={this.state.loaded >= 0 && this.state.loaded < 100}>
                    <Content title={"Novo"}>
                        <Alert alert={this.state.alert}/>
                        <ProgressBar value={this.state.loaded}/>
                        <form id={"form-add-audio"} className={"form"}>
                            <div className={"form-group"}>
                                <label htmlFor={"titulo"}>Título</label>
                                <input className={"form-control"} id={"titulo"} type={"text"}
                                       onChange={this.changeTitulo}/>
                            </div>
                            <div className={"form-group"}>
                                <label htmlFor={"descricao"}>Descrição</label>
                                <input className={"form-control"} id={"descricao"} type={"text"}
                                       onChange={this.changeDescricao}/>
                            </div>
                            <div className={"form-group"}>
                                <label htmlFor={"arquivo"}>Arquivo</label>
                                <input className={"form-control-file"} id={"arquivo"} type={"file"}
                                       onChange={this.changeFile}/>
                            </div>
                            <div className={"form-group"}>
                                <button type={"button"} className={"btn btn-primary"} onClick={this.submit}>Enviar
                                </button>
                            </div>
                        </form>
                    </Content>
                </Loader>
            </div>
        );
    }
}

export default CreateAudio;
