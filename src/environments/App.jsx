import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import '../styles/css/App.css';

class App extends Component {
  render() {
    return (
      <section>
        Begins
      </section>
    );
  }
}

const mapStateToProps = () => ({});

const matchDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, matchDispatchToProps)(App);
