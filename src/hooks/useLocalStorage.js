// src/hooks/useLocalStorage.js

import { useState, useEffect } from 'react';


function useLocalStorage(key, initialValue) {
    // State to store value
    // Pass initial state function to useState so logic is only executed once
    const [value, setValue] = useState(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error, return initialValue
            console.error(error);
            return initialValue;
        }
    });

    // useEffect to update local storage when the value changes
    useEffect(() => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(value) : value;
            // Save state
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;