import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Homepage />
        <Portfolio/>
        <Contact />
        <Footer/>
      </div>
    );
  }
}

export default App;
