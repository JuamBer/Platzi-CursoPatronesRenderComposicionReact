import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({
    openModal,
    setOpenModal
}) {

    const onClickButton = ()=>{
        setOpenModal(!openModal);
    }

    return (
        <div className="CreateTodoButton">
            <button
                onClick={onClickButton}
            >   
                +
            </button>
        </div>
    );
}

export { CreateTodoButton };