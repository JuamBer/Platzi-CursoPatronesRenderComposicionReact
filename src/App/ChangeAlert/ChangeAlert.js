import React from 'react';
import {
    useStorageListener
} from './useStorageListener';

function ChangeAlert({ syncronize }) {
    const {show,toggleShow} = useStorageListener(syncronize);

    if (show){
        return (
            <div className="ChangeAlert"> 
                <p>Hubo Cambios</p>
                <button onClick={() => toggleShow(false)}>Volver A Cargar La Info</button>
            </div>
        )
    }else{
        return null;
    }
}

export {
    ChangeAlert
}