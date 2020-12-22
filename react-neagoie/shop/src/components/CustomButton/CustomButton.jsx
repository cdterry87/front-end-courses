import React from 'react'
import './CustomButton.scss'

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...buttonProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...buttonProps}
  >
    {children}
  </button>
)

export default CustomButton
