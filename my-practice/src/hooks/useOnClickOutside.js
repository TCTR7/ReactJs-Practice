
import { useEffect } from 'react';
export function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listerner = (event) => {
            // Check if the click is outside the referenced element
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        // Attach the event listener to the document
        document.addEventListener('mousedown', listerner);
        // Also handle touch events for mobile devices
        document.addEventListener('touchstart', listerner);
        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', listerner);
            document.removeEventListener('touchstart', listerner);
        };
    }
    , [ref, handler]); // Re-run effect if ref or handler changes
    return ref; // Return the ref for use in components
}
// Usage example:
// import React, { useRef } from 'react';
// import { useOnClickOutside } from './useOnClickOutside';
// export default function ExampleComponent() {
//     const ref = useRef();
//     useOnClickOutside(ref, () => {
//         console.log('Clicked outside!');
//     });
//     return (
//         <div ref={ref} style={{ padding: '20px', background: '#f0f0f0' }}>
//             Click outside this box to trigger the handler.
//         </div>
//     );
// }
// This custom hook can be used in any component to handle clicks outside of a specified element.
// It is particularly useful for dropdowns, modals, or any interactive UI elements that should close when clicked outside.
// The hook takes a ref to the element and a handler function that will be called when a click outside is detected.
