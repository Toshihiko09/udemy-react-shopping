import React from 'react';

import './custom-button.styles.scss';


const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button 
    className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
    //isGoogleSignInがtrueの時、google-sign-inクラスをレンダーする
      {...otherProps}
    >
      {children}
  </button>
)

export default CustomButton;