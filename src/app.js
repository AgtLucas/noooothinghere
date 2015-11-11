import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return(
      <div><h1>Hey, {this.props.name}!</h1></div>
    );
  }
}

ReactDOM.render(<App name="Lucas" />, document.getElementById('main__root'));
