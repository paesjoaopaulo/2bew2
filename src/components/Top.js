import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Top.css';

class Top extends Component {

    constructor(props) {
        super(props);
        this.user = localStorage.getItem('user');
    }

    isLoggedIn() {
        if (this.user == null && this.user == undefined) {
            return (
                <li className="nav-item text-nowrap">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            )
        } else {
            return (
                <li className="nav-item text-nowrap">
                    <Link className="nav-link" to="/logout">Logout</Link>
                </li>
            )
        }
    }

    render() {
        return (
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
                    <img src='/logo.png' height='30px' alt={"Logo do site"}/>
                </Link>
                <ul className="navbar-nav px-3">
                    {this.isLoggedIn()}
                </ul>
            </nav>
        );
    }
}

export default Top;
