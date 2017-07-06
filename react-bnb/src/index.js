import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends React.Component {
    
    render() {
    	var name1 = "Dom";
   		var name2 = "Tom";

        return (
            <div>
            	<Nav />
                	<h1> Hello </h1>
                	<h1> Dom </h1>

                <Footer person1={name1} person2={name2} />                
            </div>
           
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'))