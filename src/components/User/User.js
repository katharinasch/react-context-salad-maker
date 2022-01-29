// declare the data in a common parent and then access later
// without explicitly passing it down the hierarchy of components

// special wrapping component called a Provider
// that will store the information at the root of the project

// useContext Hook to connect with the provider
// in nested components so you can display the static information

//use information stored in a context in many different components

// User is a component and as a piece of data for a special Hook called useContext

import { createContext } from 'react';

const UserContext = createContext();
export default UserContext;