import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Characters from './Pages/Characters';
import Episodes from './Pages/Episodes';
import Error from './Pages/Error';
import Episode from './Pages/Episode';
import Character from './Pages/Character';
function App()
{
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/"> <Home /></Route>
      <Route path="/home"> <Home /></Route>
      <Route path="/rick-and-morty-wiki"> <Home /></Route>
      <Route path="/characters"> <Characters /></Route>
      <Route path="/character/:id"> <Character /> </Route>
      <Route path="/episodes"> <Episodes /></Route>
      <Route path='/episode/:id' > <Episode /></Route>
      <Route path="*"><Error /></Route>
    </Switch>
  </Router>
  );
}

export default App;
