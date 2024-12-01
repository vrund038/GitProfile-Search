import React from 'react';
// Importing React to use JSX and create functional components.

const Sidebar = ({ user }) => {
  // Defining the Sidebar component that accepts a prop called "user".
  
  if (!user) {
    // Conditional rendering: If the "user" prop is not provided (null or undefined),
    // display a message indicating that no user is selected.
    
    return <div className="w-1/4 p-4 sticky top-0 text-white">No User Selected</div>;
    // Returning a div with Tailwind CSS classes for width, padding, sticky positioning, and text color.
    // This message will be shown when no user is selected.
  }

  return (
    <div className="w-1/4 bg-gray-950 p-4 sticky top-20 h-screen overflow-y-auto text-white border-r-2">
      {/* Main container for the sidebar content with Tailwind CSS classes for layout, background color,
          padding, sticky positioning, height, scrolling, text color, and border. */}
      
      <img src={user.avatar_url} alt={user.login} className="rounded-full w-32 h-32" />
      {/* Displaying the user's avatar image with the source URL from the "user" object and alternative text
          as the user's login name. Styled with rounded corners and specific width and height. */}
      
      <h2 className="text-xl mt-4">{user.name}</h2>
      {/* Displaying the user's name as a heading with Tailwind CSS classes for text size and margin-top. */}
      
      <h2 className="text-sl mb-2">{user.login}</h2>
      {/* Displaying the user's login name with styling for text size and margin-bottom. */}
      
      <p>{user.bio}</p>
      {/* Displaying the user's bio as a paragraph. */}
      
      <p>{user.location}</p>
      {/* Displaying the user's location as a paragraph. */}
      
      <div className="mt-4">
        {/* A container with margin-top to create space above the follower, following, company, and website information. */}
        
        <p>Followers: {user.followers}</p>
        {/* Displaying the number of followers the user has. */}
        
        <p>Following: {user.following}</p>
        {/* Displaying the number of users the user is following. */}
        
        <p>Company: {user.company}</p>
        {/* Displaying the company the user is associated with. */}
        
        <p>Website: <a href={`https://${user.blog}`} target='_blank'>{user.blog}</a></p>
        {/* Displaying the user's website as a hyperlink that opens in a new tab. */}
        
        <p>Public Repos: {user.public_repos}</p>
        {/* Displaying the number of public repositories the user has. */}
      </div>
      
      <div className="mt-4">
        {/* Another container with margin-top to create space above the GitHub profile link. */}
        
        <a href={user.html_url} className="text-blue-500">GitHub Profile</a>
        {/* Displaying a hyperlink to the user's GitHub profile with a blue text color. */}
      </div>
    </div>
  );
};

export default Sidebar;
// Exporting the Sidebar component as the default export of the module.
