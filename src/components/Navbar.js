import React, { useState } from 'react';
// Importing React and the useState hook from 'react' to manage state in the component.

import { FaGithub } from 'react-icons/fa';
// Importing the FaGithub icon from the 'react-icons' library to use the GitHub logo.

import axios from 'axios';
// Importing axios, a library for making HTTP requests.

const Navbar = ({ onSearch }) => {
  // Defining the Navbar component, which accepts a prop called "onSearch".
  
  const [search, setSearch] = useState('');
  // Declaring a state variable "search" and its setter function "setSearch".
  // This state stores the search query entered by the user and is initially set to an empty string.

  const handleSearch = async () => {
    // Defining the handleSearch function, which will be called when the user clicks the search button.

    try {
      const response = await axios.get(`https://api.github.com/users/${search}`);
      // Making an asynchronous GET request to the GitHub API to fetch user data based on the search query.
      
      onSearch(response.data);
      // Passing the fetched user data to the onSearch function (received as a prop) to update the parent component's state.
      console.log(response)
    } catch (error) {
      console.error('User not found', error);
      // If the API request fails, log an error message to the console.
    }
  };

  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Navbar container with Tailwind CSS classes for background color, padding, flexbox layout, and sticky positioning. */}
      
      <div className="flex items-center space-x-2">
        {/* Container for the GitHub logo and text with flexbox layout and spacing between items. */}
        
        <FaGithub className="text-white text-3xl" />
        {/* Rendering the GitHub icon with white color and a font size of 3xl. */}
        
        <span className="text-white text-2xl">GitHub Profile Search</span>
        {/* Displaying the "GitHub" text with white color and a font size of 2xl. */}
      </div>

      <div className="flex space-x-2">
        {/* Container for the search input and button with flexbox layout and spacing between elements. */}
        
        <input
          type="text"
          placeholder="Search GitHub users"
          className="p-2 rounded outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          // Input field for the search query. It is styled with padding, rounded corners, and no outline.
          // The value of the input is bound to the "search" state, and onChange updates the state with the input value.
        />
        
        <button 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-300"
          onClick={handleSearch}>
          {/* Search button with a blue background, white text, padding, rounded corners, and hover effect. 
              When clicked, it triggers the handleSearch function. */}
          
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
// Exporting the Navbar component as the default export of the module.
