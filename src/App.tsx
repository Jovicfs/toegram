import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import { BrowserRouter } from "react-router-dom";
import Home from './_root/pages/Home';

const App = () => {
    return (
        <main className='flex h-screen justify-center'>
            <BrowserRouter>
                <Routes>
                    {/*Private Routes */}
                    <Route path="/" element={<Home />} />
                    {/* Public Routes */}
                    <Route element={<AuthLayout />}>
                        <Route path="/sign-in" element={<SigninForm />} />
                        <Route path="/sign-up" element={<SignupForm />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default App