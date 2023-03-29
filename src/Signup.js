import "../App.css";
import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';

const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"

export default class SignupPage extends Component {
  handleSignUp = event => {
    event.preventDefault();
    const { username, email, password, confirmPassword } = this.props.inputs;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }

    Auth.signUp({
      username,
      password,
      attributes: {
        email
      },
      validationData: [] //optional
    })
      .then(data => console.log(data))
      .then(() => this.props.switchComponent("Confirm")) // switches Sign Up to Verification
      .catch(err => console.log(err))
  };

  handleLoginClick = event => {
    event.preventDefault();
    this.props.switchComponent("Login")
  };

  render() {
    return (
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">

          <div className="mb-10">
            <div className="flex justify-center">
              <img
                alt=""
                className="h-14 w-14"
                src="https://ik.imagekit.io/qysd8alv5/icon.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676943689807" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Signup to create an account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
              Already have an account? {' '}
              <Link to="" onClick={this.handleLoginClick} className="font-medium text-green-600 hover:text-green-500">
                Login
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="my-5">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                key="username"
                value={this.props.username}
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                onChange={this.props.handleFormInput}
                className={fixedInputClass}
              />
            </div>

            <div className="my-5">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                key="email-address"
                value={this.props.email}
                id="email-address"
                name="email"
                type="email"
                placeholder="Email address"
                autoComplete="email"
                onChange={this.props.handleFormInput}
                className={fixedInputClass}
              />
            </div>

            <div className="my-5">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                key="password"
                value={this.props.password}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                onChange={this.props.handleFormInput}
                className={fixedInputClass}
              />
            </div>

            <div className="my-5">
              <label htmlFor="confirm-password" className="sr-only">
                Confrim password
              </label>
              <input
                key="confirm-password"
                value={this.props.confirmPassword}
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="confirm-password"
                placeholder="Confirm Password"
                onChange={this.props.handleFormInput}
                className={fixedInputClass}
              />
            </div>
            <input type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-10" value="Signup" onClick={this.handleSignUp} />
          </form>
        </div>
      </div>
    );
  }
}
