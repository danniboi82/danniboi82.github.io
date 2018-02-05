import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import ScrollableAnchor from 'react-scrollable-anchor';




class App extends Component {
  render() {
    return (
      <div className="App">
          <ScrollableAnchor id='Home'>
            <Navbar />
          </ScrollableAnchor>
          <ScrollableAnchor id='About'>
            <Homepage />
          </ScrollableAnchor>
          <ScrollableAnchor id='Portfolio'>
            <Portfolio />
          </ScrollableAnchor>
          <ScrollableAnchor id='Contact'>
            <Contact />
          </ScrollableAnchor>
        <Footer/>
      </div>
    );
  }
}

export default App;
