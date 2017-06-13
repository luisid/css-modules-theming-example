import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Button from '../button';

function Default({ theme, ...props }) {
  return (
    <Button theme={theme} {...props} />
  );
}

if (__DEV__) {
  Default.propTypes = {
    theme: PropTypes.shape({
      btn: PropTypes.string.isRequired,
      active: PropTypes.string.isRequired,
      disabled: PropTypes.string.isRequired,
    }).isRequired,
  };
}

export default themr('button.default')(Default);
