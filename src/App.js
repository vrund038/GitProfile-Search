import React, { useState } from 'react'; 
// Importing React and the useState hook, which allows us to manage state within the component.

import Navbar from './components/Navbar';
// Importing the Navbar component from the components folder.

import Sidebar from './components/Sidebar';
// Importing the Sidebar component from the components folder.

import UserDetails from './pages/UserDetails';
// Importing the UserDetails component from the pages folder.

import "@fontsource/poppins"; 
// Importing the "Poppins" font from the "@fontsource/poppins" package to use in the app.

function App() {
  const [user, setUser] = useState(null); 
  // Declaring a state variable "user" and a function "setUser" to update its value. 
  // Initially, the user state is set to null.

  const handleSearch = (userData) => {
    setUser(userData); 
    // Defining a function "handleSearch" that takes "userData" as a parameter and 
    // updates the "user" state with this data.
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-950" style={{fontFamily:"Poppins"}}>
      {/* The main container div with Tailwind CSS classes for minimum height, flexbox layout, and background color.
          Also, applying the Poppins font style. */}
      
      <Navbar onSearch={handleSearch} />
      {/* Rendering the Navbar component and passing the "handleSearch" function as a prop 
          named "onSearch" so that it can be used within the Navbar component. */}

      <div className="flex flex-1">
        {/* A wrapper div with flexbox layout and flex-grow property. */}

        <Sidebar user={user} />
        {/* Rendering the Sidebar component and passing the "user" state as a prop named "user". 
            The Sidebar component will have access to the user data. */}

        <main className="flex-1 p-4 overflow-y-auto">
          {/* Main content area with flex-grow, padding, and vertical scrolling enabled. */}

          <UserDetails user={user} />
          {/* Rendering the UserDetails component and passing the "user" state as a prop named "user". 
              The UserDetails component will display information about the user. */}
        </main>
      </div>
    </div>
  );
}

export default App;
// Exporting the App component as the default export of the module.
