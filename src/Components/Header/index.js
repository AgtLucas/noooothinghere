import React from 'react';
import styles from './styles.scss';

export default class Header extends React.Component {

  render() {
    return(
      <header className={styles.main__header}>
        <h1 className={styles.main__logo}></h1>
      </header>
    );
  }

};
