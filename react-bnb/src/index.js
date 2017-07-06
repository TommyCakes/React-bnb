import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/Nav';

class App extends React.Component {
    render() {
        return (
            <div>
            <Nav />
                <h1> Hello </h1>
                <h1> Dom </h1>                
            </div>
           
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'))