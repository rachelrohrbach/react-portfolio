import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Experience from './pages/Experience';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App-body'>
        <Navbar />
        <Wrapper>
          <Route exact path='/' component={About} />
          <Route exact path='/about' component={About} />
          <Route exact path='/skills' component={Experience} />
          <Route exact path='/projects' component={Projects} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
