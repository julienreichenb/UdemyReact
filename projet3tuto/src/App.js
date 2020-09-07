import React from 'react'
import CountryManager from './containers/CountryManager/CountryManager'
import CountryDetail from './containers/Country/CountryDetail'
import Error from './components/Errors/Error'
import Error404 from './components/Errors/Error404'
import NavBar from './components/Navbar/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={NavBar} />
      <Switch>
        <Route path="/" exact render={() => <h1>Welcome to my wonderful App !</h1>} />
        <Route path="/countries" exact component={CountryManager} />
        <Route path="/countries/:name" render={(props) => <CountryDetail name={props.match.params.name} {...props} />} />
        <Route render={() => <Error><Error404 /></Error>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
