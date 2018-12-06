import React, {Component} from 'react';
import './HomePage.css';
import Sidebar from "../components/Sidebar";
import Top from "../components/Top";
import Content from "../components/Content";

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <Top/>
                <Sidebar/>
                <Content title="Dashboard">
                    Seja bem-vindo ao Spotify!
                </Content>
            </div>
        );
    }
}

export default HomePage;
