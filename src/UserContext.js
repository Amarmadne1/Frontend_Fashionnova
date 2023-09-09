import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    
const [searchResults, setSearchResults] = useState([]);
const [searchText, setSearchText] = useState('');
const [admin, setAdmin] = useState(false);
const [validationerror, setValidationerror] = useState();
return (
<UserContext.Provider value={{searchResults, setSearchResults,searchText, setSearchText,admin, setAdmin }}>
{children}
</UserContext.Provider>
);
};