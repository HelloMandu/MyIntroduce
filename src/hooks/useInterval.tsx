import { useEffect } from 'react';

const useInterval = (callback: () => void, delay: number) => {

    useEffect(() => {
        if (delay !== 0) {
            const interval = setInterval(callback, delay);
            return () => clearInterval(interval);
        }
    }, [callback, delay]);
};

export default useInterval;