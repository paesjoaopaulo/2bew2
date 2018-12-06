import React, {Component} from 'react';
import './Content.css';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            display: 'block'
        };
    }

    componentDidMount() {
        this.setState({title: this.props.title})
    }

    render() {
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 className="h2">{this.state.title}</h1>
                </div>
                {this.props.children}
            </main>
        );
    }
}

export default Content;
