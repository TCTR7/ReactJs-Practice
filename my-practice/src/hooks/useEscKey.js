

import { useEffect } from 'react';
export function useEscKey(handler) {
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') {
                handler(e);
            }
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [handler]);
}