import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    
const [searchResults, setSearchResults] = useState([]);
const [searchText, setSearchText] = useState('');
return (
<UserContext.Provider value={{searchResults, setSearchResults,searchText, setSearchText }}>
{children}
</UserContext.Provider>
);
};