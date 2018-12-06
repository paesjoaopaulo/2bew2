import React, {Component} from 'react';
import './CreateAudio.css';

import Sidebar from "../components/Sidebar";
import Top from "../components/Top";
import Content from "../components/Content";

import axios from 'axios';

class CreateAudio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            titulo: null,
            descricao: null
        }
    }

    changeFile = (event) => {
        this.setState({
            file: event.target.files[0]
        })
    }

    changeDescricao = (event) => {
        this.setState({
            descricao: event.target.value
        })
    }

    changeTitulo = (event) => {
        this.setState({
            titulo: event.target.value
        })
    }


    submit = (event) => {

        console.log(this.file)

        return true;
        const data = new FormData()
        data.append('file', this.file, this.file.name);
        data.append('descricao', this.descricao);
        data.append('titulo', this.titulo);

        axios
            .post('/api/audios', data, {
                onUploadProgress: ProgressEvent => {
                    this.setState({
                        loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
                    })
                },
            })
            .then(res => {
                console.log(res.statusText)
            })
    }

    render() {
        return (
            <div className="CreateAudio">
                <Top/>
                <Sidebar/>
                <Content title={"Novo"}>
                    <form className={"form"}>
                        <div className={"form-group"}>
                            <label htmlFor={"arquivo"}>Arquivo</label>
                            <input className={"form-control-file"} id={"arquivo"} type={"file"}
                                   onChange={this.changeFile}/>
                        </div>
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
                        <div> {Math.round(this.state.loaded, 2)} %</div>
                        <div className={"form-group"}>
                            <button type={"button"} className={"btn btn-primary"} onClick={this.submit}>Enviar</button>
                        </div>
                    </form>
                </Content>
            </div>
        );
    }
}

export default CreateAudio;
