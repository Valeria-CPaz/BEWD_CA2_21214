import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

    constructor(props){
        super(props);
        this.state = {counter: 1};
        // this binding is necessary to make 'this' work in the callback
        this.increaseCounter = this.increaseCounter.bind(this);
        this.decreaseCounter = this.decreaseCounter.bind(this);
    }

    increaseCounter() {
        this.setState(prevState =>({
            counter: prevState.counter+1
        }));
    }

    decreaseCounter() {
        this.setState(prevState =>({
            counter: prevState.counter-1
        }));
    }

    render() {
        return (
        <h1>
           <p> This is the navigation component.</p>
           <p> My properties are {this.props.name}.</p>
           <p> My state is: {this.state.counter}.</p>

           <button onClick={this.increaseCounter}>
               Click me to increse counter
           </button>
           <button onClick={this.decreaseCounter}>
               Click me to decrese counter
           </button>
           <Link to="/" >To Home Component</Link>
        </h1>
        );
    }
}

export default Navigation;