
import React from 'react'

function LoginForm(){

    return(
        <>
        
        <form action="https://example.com" method="get" className="flex flex-col bg-yellow-100">
            <div className="flex flex-col items-center justify-center min-h-60 bg-gray-100 border-2 border-red-500 ">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <input type="text" placeholder="Username" className="mb-4 p-2 border rounded-lg" />
                <input type="password" placeholder="Password" className="mb-4 p-2 border rounded-lg" />
                <button type="submit" className="custom-button ">Login</button>
            </div>
        
        </form>
        </>
    );

}

export default LoginForm;