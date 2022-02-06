import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({
    show,
    toggleShow
    
}) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export {
    ChangeAlertWithStorageListener
}