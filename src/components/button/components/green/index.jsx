import React from 'react';
import Button from '../button';
import styles from './green.css';

function Green(props) {
  return (
    <Button theme={styles} {...props} />
  );
}

export default Green;
