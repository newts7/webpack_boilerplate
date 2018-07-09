import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Link to="/test">Link</Link>
        
             <Route path = "/test" component = {testComponent}></Route>
        </div>
        </Router>
    );
  }
}

const testComponent = ()=>(<div>
  Testcomponet
</div>
)

export default App;
