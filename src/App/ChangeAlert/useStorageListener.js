import React from 'react';

function useStorageListener({syncronize}) {

    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log("Hubo cambios en TODOS_V1");
            setStorageChange(true);
        }
    });

    const toggleShow = () => {
        setStorageChange(false);
        syncronize();
    }

    return {
        show: storageChange,
        toggleShow
    };
}

export {
    useStorageListener
}