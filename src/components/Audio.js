import React, {Component} from 'react';
import './Audio.css';

class Audio extends Component {

    constructor(props) {
        super(props);
        this.setState({audio: props.audio});
    }

    delete() {
        alert("Deletar áudio");
    }

    render() {
        return (

            <div className="media col-md-6">
                <div className="media-left">
                    <audio className={"media-object"} controls>
                        <source src={"uploads/" + this.props.audio.path} type={"audio/mp3"}/>
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.audio.titulo}</h4>
                    {this.props.audio.descricao}
                </div>
            </div>
        );
    }
}

export default Audio;
