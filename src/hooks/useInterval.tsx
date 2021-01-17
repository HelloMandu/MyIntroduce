import { useEffect } from 'react';

function useInterval(callback: () => void, delay: number): void {
    useEffect(() => {
        if (delay !== 0) {
            const interval = setInterval(callback, delay);
            return () => clearInterval(interval);
        }
    }, [callback, delay]);
};

export default useInterval;