import React from 'react';
import PropTypes from 'prop-types';
import Default from './components/default';
import Green from './components/green';

const styles = {
  default: 'default',
  green: 'green',
};

function Button({ btnStyle, children, ...props }) {
  switch (btnStyle) {
    case styles.default:
      return (
        <Default {...props}>
          {children}
        </Default>
      );
    case styles.green:
      return (
        <Green {...props}>
          {children}
        </Green>
      );
    default:
      throw new Error(`['${btnStyle}'] is not a valid 'btnStyle'`);
  }
}

Button.defaultProps = {
  btnStyle: 'default',
};

if (__DEV__) {
  Button.propTypes = {
    btnStyle: PropTypes.oneOf(['default', 'green']),
    children: PropTypes.element.isRequired,
  };
}

export default Button;
