import '../App.css';
import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"

export default class Confirm extends Component {
    handleConfirmation = event => {
        event.preventDefault();
        const { username, code } = this.props.inputs;
        // After retrieveing the confirmation code from the user
        Auth.confirmSignUp(username, code, {
            // Optional. Force user confirmation irrespective of existing alias. By default set to True.
            forceAliasCreation: true
        })
            .then(data => console.log(data))
            .then(() => this.props.switchComponent("Login"))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <form className="mt-8 space-y-6">
                <div className="-space-y-px">
                    <div className="my-5">
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            key="confirmation"
                            value={this.props.code}
                            id="confirmation"
                            name="confirmation"
                            type="confirmation"
                            placeholder="Confirmation Code"
                            autoComplete="confirmation"
                            onChange={this.props.handleFormInput}
                            className={fixedInputClass}
                        />
                    </div>
                </div>

                <input type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-10" value="Confirm" onClick={this.handleConfirmation} />

            </form>
        );
    }
}