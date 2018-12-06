import React, {Component} from 'react';
import './LoginPage.css';
import Sidebar from "../components/Sidebar";
import Audio from "../components/Audio";
import Top from "../components/Top";

class ShowAudioPage extends Component {

    constructor(props) {
        super(props);
        this.getAudio();
        this.setState({loading: true});
    }

    getAudio() {
        this.setState({
            audio: {_id: "94898", src: "/a1.mp3", description: "Descrição do áudio #01#"}
        })
        this.setState({loading: false});
    }

    render() {
        return (
            <div className="ShowAudioPage">
                <Top/>
                <Sidebar/>
                <h1>Áudio </h1>
                {this.state.loading}
                <Audio audio={this.state.audio}/>
            </div>
        );
    }
}

export default ShowAudioPage;
