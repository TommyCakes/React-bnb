import React from 'react';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 1    
        }
    }
    
    makeMeOlder() {
        this.setState({
            age: this.state.age + 1
        });     
    }
    
    render () {        
        return (
            <div>
                <h1>Fuck</h1>
                <button onClick={this.makeMeOlder.bind(this)} className="btn btn-info"> 
                Click me fucka - 
                {this.state.age}  
                </button>
            </div>
        );     

    }  
}
