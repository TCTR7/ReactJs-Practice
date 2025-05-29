
import { useState } from 'react';
export function useCopyToClipboard(){
    const [copied, setCopied] = useState(false);

    const copy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
        }
        catch (error) {
            console.error('Failed to copy text: ', error);
            setCopied(false);
        }
    }
    return { copied, copy };
}