import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                console.log('use effect');

                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 1000);
    });

    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    }

    let msg;

    if (error) {
        error = "Ha habido un error. Recargue la página.";
    } else if (loading) {
        msg = "Cargando..."
    } else if (!loading && (item.length === 0)) {
        msg = "Crea tu primer TODO"
    } else {
        msg = null;
    }

    return {
        item,
        saveItem,
        error,
        loading
    };
}

export {
    useLocalStorage
};