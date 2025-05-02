import React from 'react';
import PortfolioCard from './components/PortfolioCard';
import LoginForm from  './components/LoginForm';
import BulletCard from './components/BulletCard';

function App(){

  return(

    <>

    <div className='flex '>
      <BulletCard/>
    </div>
 <div className="flex justify-center items-center min-h-screen bg-yellow-100 border-2 border-blue-500"> {/* Center card */}
      <PortfolioCard
        name="John Doe" // Your Name
        title="Frontend Developer" // Your Title
        description="Passionate about clean UI and interactive apps." // Description
        skills={["React", "JavaScript", "Tailwind CSS", "Git"]} // Skills array
      />
      <LoginForm /> {/* Added LoginForm component */}
      
    </div>
    </>
  )
}

export default App;