import React from 'react';
import ReactDOM from 'react-dom';


import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import HomePage from './pages/HomePage';
import AudiosPage from "./pages/AudiosPage";
import CreateAudio from "./pages/CreateAudio";
import LoginPage from "./pages/LoginPage";
import CadastroPage from "./pages/CadastroPage";
import LogoutPage from "./pages/LogoutPage";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" exact={true} component={HomePage}/>
            <Route path="/audios" exact={true} component={AudiosPage}/>
            <Route path="/audios/create" exact={true} component={CreateAudio}/>
            <Route path="/login" exact={true} component={LoginPage}/>
            <Route path="/cadastro" exact={true} component={CadastroPage}/>
            <Route path="/logout" exact={true} component={LogoutPage}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
