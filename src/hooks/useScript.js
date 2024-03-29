// Está en desuso, era para el antiguo catalogo, se usa para agregar scripts

import { useEffect } from 'react';

const useScript = (url, asyn) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = url;
        script.async = asyn;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
};

export default useScript;
