
import React from 'react'

function LoginForm(){

    return(
        <>
        
        <form action="https://example.com" method="get">
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 border-2 border-blue-500">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <input type="text" placeholder="Username" className="mb-4 p-2 border rounded" />
                <input type="password" placeholder="Password" className="mb-4 p-2 border rounded" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
            </div>
        
        </form>
        </>
    );

}

export default LoginForm;