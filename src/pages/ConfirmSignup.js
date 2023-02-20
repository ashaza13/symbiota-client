import React from 'react';
import "../App.css";
import Header from "../components/Header"
import Confirm from "../components/Confirmsignup"

export default function ConfirmPage() {
    return (
        <>
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <Header
                        heading="Confirm your account creation"
                        paragraph=""
                        linkName=""
                        linkUrl="/signup"
                    />
                    <Confirm />
                </div>
            </div>
        </>
    )
}