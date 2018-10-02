import React from 'react';
import styles from './Welcome.module.scss';

const Welcome = () => (
  <div className={styles.welcome} data-cy="welcome">
    <h1>Rocket Game</h1>
  </div>
);

export default Welcome;
