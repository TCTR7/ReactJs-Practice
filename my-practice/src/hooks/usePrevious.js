
import { useState, useEffect } from 'react';
export default function usePrevious(value) {
    // State to hold the previous value
    const [previousValue, setPreviousValue] = useState();

    useEffect(() => {
        // Update the previous value before the next render
        setPreviousValue(value);
    }, [value]); // Only re-run if value changes

    return previousValue; // Return the previous value
}