import React, {Component} from 'react';
import './CreateAudio.css';

import Sidebar from "../components/Sidebar";
import Top from "../components/Top";
import Content from "../components/Content";

class CreateAudio extends Component {

    render() {
        return (
            <div className="CreateAudio">
                <Top/>
                <Sidebar/>
                <Content title={"Novo Áudio"}>
                    <form className={"form"}>
                        <div className={"form-group"}>
                            <label htmlFor={"nkçfççf"}></label>
                        </div>
                    </form>
                </Content>
            </div>
        );
    }
}

export default CreateAudio;
