import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <NavBar/>
      <br></br>
      <Route path="/" exact component={ExerciseList}/>
      <Route path="/edit/:id" exact component={EditExercise}/>
      <Route path="/create" exact component={CreateExercise}/>
      <Route path="/user" exact component={CreateUser}/>
    </Router>
  );
}

export default App;
