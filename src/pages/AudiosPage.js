import React, {Component} from 'react';
import './LoginPage.css';

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
            query: ''
        };
    }

    componentDidMount() {
        axios.get('/api/audios')
            .then((audios) => {
                const result = audios.data;
                console.log(result)
                this.setState({
                    audios: result
                });
            })
            .catch((err) => console.log(err));
    }

    list() {
        return (
            this.state.audios.map((audio) => {
                return <Audio audio={audio}/>
            })
        )
    }

    render() {
        return (
            <div className="AudiosPage">
                <Top/>
                <Sidebar/>
                <Content title="Áudios">
                    <div className="audios-list row">
                        {this.list()}
                    </div>
                </Content>
            </div>
        );
    }
}

export default AudiosPage;
