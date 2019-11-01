import React from 'react';
import './App.css';
import ProjectList from './components/ProjectList';

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={props => {
          return <ProjectList />;
        }}
      />
    </div>
  );
}

export default App;
