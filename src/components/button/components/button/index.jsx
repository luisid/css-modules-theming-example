import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.css';

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

class Button extends React.Component {
  onClick = (e) => {
    if (this.props.disabled) {
      return;
    }

    this.props.onClick(e);
  }

  getProps = () => {
    const { theme, disabled, className, onClick, active, size, ...props } = this.props;
    let baseCls;
    let sizeCls;
    if (disabled) {
      baseCls = theme.disabled;
    } else if (active) {
      baseCls = theme.active;
    } else {
      baseCls = theme.btn;
    }

    if (size) {
      sizeCls = styles[sizes[size]];
    }

    const cls = cn(className, sizeCls, baseCls);

    return {
      ...props,
      className: cls,
      onClick: this.onClick,
    };
  }

  getButtonProps = () => {
    const { disabled } = this.props;
    const props = this.getProps();

    return {
      ...props,
      disabled,
    };
  }

  getLinkProps = () => {
    const props = this.getProps();
    const { href } = this.props;

    return {
      ...props,
      href,
    };
  }

  renderLink = () => {
    const props = this.getLinkProps();

    return (
      <a {...props}>
        {this.props.children}
      </a>
    );
  }

  renderButton = () => {
    const props = this.getButtonProps();

    return (
      <button {...props}>
        {this.props.children}
      </button>
    );
  }

  render() {
    if (this.props.href) {
      return this.renderLink();
    }

    return this.renderButton();
  }
}

Button.defaultProps = {
  size: 'medium',
  className: undefined,
  active: false,
  disabled: false,
  href: undefined,
};

if (__DEV__) {
  Button.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    theme: PropTypes.shape({
      btn: PropTypes.string.isRequired,
      disabled: PropTypes.string.isRequired,
      active: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
  };
}

export default Button;
