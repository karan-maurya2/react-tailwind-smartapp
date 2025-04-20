// React Component: `PortfolioCard.jsx`

// This component displays a portfolio card with user information.
// It includes the user's name, job title, description, and a list of skills.

import React from 'react'; // Import React to use JSX

// PortfolioCard component takes 4 props to display user info
const PortfolioCard = ({ name, title, description, skills }) => {
return (
// Main container for the card with Tailwind CSS classes for styling
<div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-black"> {/* Card layout */}
{/* Display the user's name in a bold, centered heading */}
<h1 className="text-xl font-bold text-center">{name}</h1> {/* Display Name */}

{/* Display the user's job title in a smaller, gray-colored, centered paragraph */}
<p className="text-center text-White-500">{title}</p> {/* Job Title */}

{/* Display the user's description in a gray-colored paragraph with some margin at the top */}
<p className="mt-4 text-gray-700">{description}</p> {/* Description Paragraph */}

{/* Render a list of skills with Tailwind CSS classes for styling */}
<ul className="mt-4 list-disc pl-5 text-gray-600"> {/* Skills List */}
{/* Map over the skills array and render each skill as a list item */}
{skills.map((skill, index) => (
// Use the index as the key for each list item (not ideal for dynamic lists, but acceptable here)
<li key={index}>{skill}</li> // Render each skill
))}
</ul>
</div>
);
};

// Export the PortfolioCard component so it can be imported and used in other files (e.g., App.jsx)
export default PortfolioCard; 