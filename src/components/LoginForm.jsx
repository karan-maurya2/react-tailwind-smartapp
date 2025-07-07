
import React from 'react'

function LoginForm(){

    return(
        <>
        <div className='flex flex-col items-center justify-center min-h-64 bg-yellow-300 border-4 border-black'>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
      
        <form action="https://example.com" method="get" className="flex flex-col bg-blue-600">
            <div className="flex flex-col items-center justify-center max-h-screen bg-green-700 border-2 border-red-500 ">
                {/* <h1 className="text-2xl font-bold mb-4">Login</h1> */}
                <input type="text" placeholder="Username" className="mb-4 p-2 border rounded-lg" />
                <input type="password" placeholder="Password" className="mb-4 p-2 border rounded-lg" />
                <button type="submit" className="custom-button ">Login</button>
            </div>
        </form>
        </div>
        
</>
    );

}

export default LoginForm;