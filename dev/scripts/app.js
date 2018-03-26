import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Link, Redirect} from 'react-router-dom';
import Hero from './hero';
import Article from './article';
import Preview from './preview';


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
      loggedIn: true,
      dbSnapshot: []
    }
  }

  componentDidMount() {
    const dbref = firebase.database().ref();
    dbref.on('value', (snapshot) => {
      const dbState = snapshot.val();
      const dbStateArray = [];
      for (let key in dbState) {
        dbState[key].lang = key;
        dbStateArray.push(dbState[key]);
      }
      console.log(dbStateArray);
      this.setState({
        dbSnapshot: dbStateArray
      })
    });
  }
  render() {
    return (
      <Router>
        {this.state.loggedIn?
        <nav>
          <Link to="/hero">Hero</Link>
          <Link to="/article">Article</Link>
          <Link to="/preview">Preview</Link>

          <Route path="/hero" exact render={(props) => (
              <Hero 
                dbSnapshot = {this.state.dbSnapshot}
              />
            )} 
          />

          <Route path="/article" component={Article} />
          <Route path="/preview" component={Preview} />
        </nav>
        :null}
      </Router>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
