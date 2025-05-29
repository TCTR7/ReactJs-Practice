import { useState, useEffect, useCallback, useRef } from "react";

function useThrottle(fn, delay = 1000) {
  if (typeof fn !== "function") {
    throw new Error("useThrottle expects a function as the first argument");
  }

  const [isThrottled, setIsThrottled] = useState(false);
  const timeoutRef = useRef(null);

  const throttledFn = useCallback(
    (...args) => {
      if (!isThrottled) {
        fn(...args);
        setIsThrottled(true);
        // Set a timeout to reset the throttled state after the specified delay
        timeoutRef.current = setTimeout(() => {
          setIsThrottled(false);
        }, delay);
      }
    },
    [fn, delay, isThrottled]
  );

  // Cleanup function to clear the timeout if the component unmounts or delay changes
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);

  return throttledFn;
}

export default useThrottle;
