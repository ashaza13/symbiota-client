import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Auth } from 'aws-amplify';

const intitialFormState = {
  username: '',
  email: '',
  password: '',
  authCode: '',
  formType: 'signUp'
}

const Profile = () => {
  const [formState, setFormState] = useState(intitialFormState);
  const [loading, setLoading] = useState(true);
  const { username, email, password, authCode, formType } = formState;
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      setUser(userData);
      setFormState(() => ({ ...formState, formType: 'signedIn' }));
      setLoading(false);
    } catch (err) {
      setUser(null);
      setLoading(false);
    }
  };

  function onChange(e) {
    e.persist();
    setFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
  };

  function toggleFormType(formType) {
    setFormState(state => ({ ...state, formType }));
  };

  async function signUp() {
    if (!username || !email || !password) return;
    try {
      await Auth.signUp({
        username, password, attributes: { email }
      });
      setFormState(() => ({ ...formState, formType: 'confirmSignUp' }));
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };

  async function signIn() {
    if (!username || !password) return;
    try {
      const user = await Auth.signIn(username, password);
      setUser(user);
      localStorage.setItem('username', user.username);
      setFormState(() => ({ ...formState, formType: 'signedIn' }));
    } catch (err) {
      console.log('error signing in: ', err);
    }
  };

  async function confirmSignUp() {
    if (!authCode) return;
    try {
      await Auth.confirmSignUp(username, authCode);
      await signIn();
    } catch (err) {
      console.log('error confirming signing up: ', err);
    }
  };

  async function signOut() {
    await Auth.signOut();
    setFormState(() => ({ ...formState, formType: 'signUp' }));
    setUser(null);
  };

  if (loading) return null
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className='mt-8 space-y-6'>
          {
            formType === 'signUp' && (
              <div>
                <div className="mb-10">
                  <div className="flex justify-center">
                    <img
                      alt=""
                      className="h-14 w-14"
                      src="https://ik.imagekit.io/qysd8alv5/icon.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676943689807" />
                  </div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign up for your account
                  </h2>
                  <p className="mt-2 text-center text-sm text-gray-600 mt-5">
                    Already have an account?{' '}
                    <p onClick={() => toggleFormType('signIn')} className={stateToggleStyle}>
                      Sign in.
                    </p>
                  </p>
                </div>
                <input
                  name="username"
                  value={username}
                  className={inputStyle}
                  placeholder="Username"
                  onChange={onChange}
                />
                  <input
                    name="email"
                    value={email}
                    className={inputStyle}
                    placeholder="Email"
                    onChange={onChange}
                  />
                <input
                  name="password"
                  value={password}
                  className={inputStyle}
                  type="password"
                  placeholder="Password"
                  onChange={onChange}
                />
                <button onClick={signUp} className={buttonStyle}>
                  Sign Up
                </button>
              </div>
            )
          }
          {
            formType === 'confirmSignUp' && (
              <div>
                <div className="mb-10">
                  <div className="flex justify-center">
                    <img
                      alt=""
                      className="h-14 w-14"
                      src="https://ik.imagekit.io/qysd8alv5/icon.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676943689807" />
                  </div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Confirm your account
                  </h2>
                </div>
                <input
                  name="authCode"
                  value={authCode}
                  className={inputStyle}
                  placeholder="Authentication code"
                  onChange={onChange}
                />
                <button onClick={confirmSignUp} className={buttonStyle}>
                  Confirm Sign Up
                </button>
              </div>
            )
          }
          {
            formType === 'signIn' && (
              <div>
                <div className="mb-10">
                  <div className="flex justify-center">
                    <img
                      alt=""
                      className="h-14 w-14"
                      src="https://ik.imagekit.io/qysd8alv5/icon.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676943689807" />
                  </div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                  </h2>
                  <p className="mt-2 text-center text-sm text-gray-600 mt-5">
                    Need an account?{' '}
                    <p onClick={() => toggleFormType('signUp')} className={stateToggleStyle}>
                      Sign up.
                    </p>
                  </p>
                </div>
                <input
                  name="username"
                  value={username}
                  className={inputStyle}
                  placeholder="Username"
                  onChange={onChange}
                />
                <input
                  name="password"
                  value={password}
                  className={inputStyle}
                  type="password"
                  placeholder="Password"
                  onChange={onChange}
                />
                <button onClick={signIn} className={buttonStyle}>
                  Sign In
                </button>
              </div>
            )
          }
          {
            formType === 'signedIn' && (
              <div>
                <h1>Hello, {user.username}</h1>
                ofajf
                <button onClick={signOut} className={buttonStyle}>
                  Sign Out
                </button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;

const stateToggleStyle = `font-medium text-green-600 hover:text-green-500`

const inputStyle = "rounded-md appearance-none relative block w-full px-3 my-5 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"

const buttonStyle = "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-10"