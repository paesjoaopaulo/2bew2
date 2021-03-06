import React, {Component} from 'react';
import './AudiosPage.css';

import Loader from 'react-loader';

import Sidebar from "../components/Sidebar";
import Top from "../components/Top";
import Content from "../components/Content";
import Audio from "../components/Audio";

import axios from 'axios';

class AudiosPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            audios: [],
            query: '',
            loaded: false,
            showLoader: false
        };
    }

    componentWillMount() {
        this.setState({showLoader: false})
    }

    componentDidMount() {
        this.setState({showLoader: true})
        axios
            .get('/api/audios')
            .then((result) => {
                const data = result.data;
                this.setState({
                    audios: data.audios,
                    loaded: true,
                    showLoader: false
                });
            })
            .catch((err) => console.log(err))
    }

    list() {
        if (this.state.audios.length > 0) {
            return (
                this.state.audios.map((audio, key) => {
                    return <Audio key={key} audio={audio}/>
                })
            )
        } else {
            return (
                <p>Nenhum áudio cadastrado ainda.</p>
            )
        }
    }

    render() {
        return (
            <div className="AudiosPage">
                <Top/>
                <Sidebar/>
                <Loader loaded={this.state.loaded}>
                    <Content title="Áudios">
                        <div className="audios-list row">
                            {this.list()}
                        </div>
                    </Content>
                </Loader>
            </div>
        );
    }
}

export default AudiosPage;
