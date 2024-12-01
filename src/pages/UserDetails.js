import React, { useEffect, useState } from 'react';
// Importing React along with the useEffect and useState hooks for managing side effects and state in the component.

import axios from 'axios';
// Importing axios for making HTTP requests.

import Repositories from '../components/Repositories';
// Importing the Repositories component from the components folder to display the list of repositories.

const UserDetails = ({ user }) => {
  // Defining the UserDetails component that accepts a prop called "user".
  
  const [repos, setRepos] = useState([]);
  // Declaring a state variable "repos" and a setter function "setRepos" to store the user's repositories.
  // Initially, "repos" is set to an empty array.

  useEffect(() => {
    // useEffect is used to handle side effects, specifically fetching data when the component mounts or the "user" prop changes.

    const fetchRepos = async () => {
      // Declaring an asynchronous function to fetch the user's repositories.

      if (user) {
        // Checking if the "user" prop is provided (not null or undefined).

        const response = await axios.get(user.repos_url);
        // Making an asynchronous GET request to the GitHub API using the user's repos_url to fetch their repositories.

        setRepos(response.data);
        // Updating the "repos" state with the fetched data (list of repositories).
      }
    };

    fetchRepos();
    // Calling the fetchRepos function to initiate the data fetch.

  }, [user]);
  // The effect depends on the "user" prop. It will re-run the fetchRepos function whenever the "user" prop changes.

  if (!user) {
    // Conditional rendering: If the "user" prop is not provided (null or undefined), 
    // display a message prompting the user to search for a GitHub user.

    return <div className='text-white'>Please search for a user to see details</div>;
    // Returning a div with Tailwind CSS class for text color, displaying the message to the user.
  }

  return (
    <div>
      {/* Main container for the user details content. */}
      
      <h1 className="text-2xl mb-4 text-white">{user.login}'s Repositories</h1>
      {/* Displaying the user's login name followed by "'s Repositories" as a heading. 
          Styled with Tailwind CSS classes for text size, margin-bottom, and text color. */}

      <Repositories repos={repos} />
      {/* Rendering the Repositories component and passing the "repos" state as a prop named "repos".
          The Repositories component will display the list of repositories. */}
    </div>
  );
};

export default UserDetails;
// Exporting the UserDetails component as the default export of the module.
