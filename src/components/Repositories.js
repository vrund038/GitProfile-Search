import React from 'react';
// Importing React to create a functional component using JSX.

const Repositories = ({ repos }) => {
  // Defining the Repositories component that accepts a prop called "repos", which is an array of repository objects.

  return (
    <div>
      {/* Main container for the list of repositories. */}
      
      {repos.map(repo => (
        // Using the map function to iterate over the "repos" array and render a div for each repository.
        
        <div key={repo.id} className="text-white p-4 mb-4 rounded shadow">
          {/* Each repository is wrapped in a div with Tailwind CSS classes for text color, padding, margin-bottom,
              rounded corners, and a shadow effect. The "key" prop is set to the unique "id" of each repository. */}
          
          <h2 className="text-xl">{repo.name}</h2>
          {/* Displaying the repository name as a heading with a specific text size. */}
          
          <p>{repo.description}</p>
          {/* Displaying the repository description as a paragraph. */}
          
          <div>
            {/* A container for the "View Repository" link. */}
            
            <a href={repo.html_url} target='_blank' className="text-blue-500">
              View Repository
            </a>
            {/* A hyperlink to the repository's GitHub page. It opens in a new tab and is styled with a blue text color. */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Repositories;
// Exporting the Repositories component as the default export of the module.
