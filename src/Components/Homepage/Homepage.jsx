import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import ResponsiveContainer from './ResponsiveContainer/ResponsiveContainer';
import Contact from './Contact/Contact';
import Intro from './Intro/Intro';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Fade, Flip, Rotate, Zoom, Bounce, Roll } from 'react-reveal';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */


/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */




const Homepage = () => (
  <ResponsiveContainer>
    <Zoom duration={2000}>
      <ScrollableAnchor id="About">
        <Intro />
      </ScrollableAnchor>
    </Zoom>
    <Zoom duration={2000}>
      <ScrollableAnchor id="Portfolio">
        <Portfolio />
      </ScrollableAnchor>
    </Zoom>
    <Fade right duration={2000}>
      <ScrollableAnchor id="Contact">
        <Contact />
      </ScrollableAnchor>
    </Fade>
    <Footer />
  </ResponsiveContainer>
)

export default Homepage;