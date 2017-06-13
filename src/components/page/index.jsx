import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import styles from './page.css';

function Page({ children, menu }) {
  return (
    <div className={styles.page}>
      <Header menu={menu} />
      {children}
    </div>
  );
}

if (__DEV__) {
  Page.propTypes = {
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    children: PropTypes.element.isRequired,
  };
}

export default Page;
