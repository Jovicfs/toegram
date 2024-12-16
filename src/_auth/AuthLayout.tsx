import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = () => {
    const isAuthenticated = false;



    return (
        <>
            {isAuthenticated ? (<Navigate to='/' />) : (
                <>
                    <section className='flex flex-1 justify-center items-center flex-col py-10 bg-dark-2'>
                        <Outlet />
                    </section>
                    <img src="assets/images/toegramPost.png" alt="logo" className=' hidden xl:block h-screen w-1/2 object-cover bg-no-repeat' />
                </>
            )}

        </>
    )
}

export default AuthLayout