import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { themr } from 'react-css-themr';

function Body(props) {
  return (
    <div className={cn(props.theme.body, props.className)}>
      {props.children}
    </div>
  );
}

if (__DEV__) {
  Body.propTypes = {
    className: PropTypes.string.isRequired,
    theme: PropTypes.shape({
      body: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.oneOfType([
      PropTypes.element.isRequired,
      PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
    ]).isRequired,
  };
}

export default themr('body')(Body);
