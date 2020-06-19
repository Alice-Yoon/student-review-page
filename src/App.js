import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import LandingPage from './components/view/LandingPage/LandingPage';
import ClassReviewPage from './components/view/ClassReviewPage/ClassReviewPage';
import MySentencePage from './components/view/MySentencePage/MySentencePage';
import NavBar from './components/view/NavBar/NavBar';
import NotFoundPage from './components/view/NotFoundPage/NotFoundPage';


function App() {


  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/classreview/:id" component={ClassReviewPage} />
        <Route exact path="/mysentence" component={MySentencePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
