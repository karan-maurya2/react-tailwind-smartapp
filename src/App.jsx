import React from 'react';
import PortfolioCard from './components/PortfolioCard';

function App(){

  return(

    <>
 <div className="flex justify-center items-center min-h-screen bg-gray-100"> {/* Center card */}
      <PortfolioCard
        name="John Doe" // Your Name
        title="Frontend Developer" // Your Title
        description="Passionate about clean UI and interactive apps." // Description
        skills={["React", "JavaScript", "Tailwind CSS", "Git"]} // Skills array
      />
    </div>
    </>
  )
}

export default App;