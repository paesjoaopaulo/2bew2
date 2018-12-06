import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (

            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Menu</span>
                    </h6>
                    <ul className="nav flex-column">
                        <li className="nav-item text-nowrap">
                            <Link className="nav-link" to={'/'}>Home</Link>
                        </li>
                    </ul>
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Áudios</span>
                    </h6>
                    <ul className="nav flex-column">
                        <li className="nav-item text-nowrap">
                            <Link className="nav-link" to={'/audios'}>Todos</Link>
                        </li>
                        <li className="nav-item text-nowrap">
                            <Link className="nav-link" to={'/audios/create'}>Novo</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;
