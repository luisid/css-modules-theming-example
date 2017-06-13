import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

class Header extends React.Component {
  render() {
    const { theme } = this.props;

    return (
      <div className={theme.header} />
    );
  }
}

if (__DEV__) {
  Header.propTypes = {
    theme: PropTypes.shape({
      header: PropTypes.string.isRequired,
      logo: PropTypes.string,
    }).isRequired,
  };
}


export default themr('header')(Header);
