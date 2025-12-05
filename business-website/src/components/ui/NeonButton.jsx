import React from 'react';
import './NeonButton.css';

const NeonButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = '',
  ...props 
}) => {
  return (
    <button
      className={`neon-button neon-button--${variant} neon-button--${size} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="neon-button__content">{children}</span>
      <span className="neon-button__glow"></span>
    </button>
  );
};

export default NeonButton;
