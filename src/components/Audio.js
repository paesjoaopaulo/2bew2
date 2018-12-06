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

            <div className="media">
                <div className="media-left">
                    <audio className={"media-object"} controls>
                        <source src={this.props.audio.src} type={this.props.audio.type}/>
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.audio.description}</h4>
                    {this.props.audio.description}
                </div>
            </div>
        );
    }
}

export default Audio;
