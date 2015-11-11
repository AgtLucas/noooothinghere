import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class Header extends React.Component {

  render() {
    return(
      <header styleName='main__header'>
        <h1 styleName='main__logo'>Pokemon</h1>
      </header>
    );
  }

};

export default CSSModules(Header, styles);
