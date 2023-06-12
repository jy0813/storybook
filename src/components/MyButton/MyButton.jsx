import React from 'react';
/*
  * PropTypes의 경우 => 런타임 체킹을 위한 도구
  * 예를 들어 TypeScript 의 경우 => 정적 타입 검사 도구
 */
import PropTypes from 'prop-types';
import './MyButton.css';

/**
 * Primary UI component for user interaction
 */
export const MyButton = ({ primary, backgroundColor, radius, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: radius + 'px'
      }}
      {...props}
    >
      {label}
    </button>
  );
};

MyButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * MyButton contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  radius:PropTypes.string
};

MyButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  radius:null,
  onClick: undefined,
};
