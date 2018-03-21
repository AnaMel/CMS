import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Link, Redirect} from 'react-router-dom';
import Hero from './hero';
import Article from './article';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyC-Gmb7VCMFp0x2mOzG4LSGL4PNAjxKxmA",
  authDomain: "mycms-a893e.firebaseapp.com",
  databaseURL: "https://mycms-a893e.firebaseio.com",
  projectId: "mycms-a893e",
  storageBucket: "",
  messagingSenderId: "951636233127"
};
firebase.initializeApp(config);


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true
    }
  }
    render() {
      return (
        <Router>
          {this.state.loggedIn?
          <nav>
            <Link to="/hero">Hero</Link>
            <Link to="/article">Article</Link>
            <Route path="/hero" component={Hero} />
            <Route path="/article" component={Article} />
          </nav>
          :null}
        </Router>

      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
