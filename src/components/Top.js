import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Top.css';

class Top extends Component {
    render() {
        return (

            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
                    <img src='/logo.png' height='30px' alt={"Logo do site"}/>
                </Link>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Procurar"
                       aria-label="Procurar"/>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Link className="nav-link" to="/logout">Sair</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Top;
