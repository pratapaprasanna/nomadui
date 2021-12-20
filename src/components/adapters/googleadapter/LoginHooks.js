import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import ReactDOM from 'react-dom';
import Display from '../../HomeScreen/Homescreen';

import { refreshTokenSetup } from '../../../utils/refreshToken';

const clientId = '1034883885605-gvj78f1cg3urngprb0jjfr3p0olqh8tr.apps.googleusercontent.com';

function GoogleLoginHooks() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res);
    ReactDOM.render(<Display name={res.profileObj.name} />, document.getElementById('root'));
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(`Failed to login. 😢 Please ping this to repo owner twitter.com/GouthamPratapa`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div className="App">
      <button onClick={signIn} className="button">
        <img src="icons/google.svg" alt="google login" className="icon"></img>
        <span className="buttonText"> Login with Google</span>
      </button>
    </div>
  );
}

export default GoogleLoginHooks;
