import React from 'react';
import Header from './Components/Header/index.js';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <h1>Hey, {this.props.name}!</h1>
      </div>
    );
  }
}
