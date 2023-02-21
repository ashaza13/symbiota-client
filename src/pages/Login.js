import "../App.css";
import Header from "../components/Header"
import FormExtra from "../components/FormExtra";
import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"

export default class LoginPage extends Component {
    handleLogin = event => {
        event.preventDefault();
        const { username, password } = this.props.inputs;
        // You can pass an object which has the username, password and validationData which is sent to a PreAuthentication Lambda trigger
        Auth.signIn({ username, password })
            .then(user => console.log(user))
            .then(() => this.props.switchComponent("Dashboard"))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <Header
                        heading="Login to your account"
                        paragraph="Don't have an account yet? "
                        linkName="Signup"
                        linkUrl="/signup"
                    />
                    <form className="mt-8 space-y-6">
                        <div className="-space-y-px">
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
                            <input type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-10" value="Login" onClick={this.handleLogin} />
                        </div>

                        <FormExtra />
                    </form>
                </div>
            </div>
        );
    }
}