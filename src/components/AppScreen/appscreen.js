import React from 'react';
import GoogleLoginHooks from '../adapters/googleadapter/LoginHooks';

export const AppScreen = () => {
  return (
    <div className="GoogleLoginBtn">
      <GoogleLoginHooks />
    </div>
  );
};
