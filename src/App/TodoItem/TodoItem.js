import React from "react";
import './TodoItem.css';
import completedSRC from '../../svg/completedSVG.svg';
import pendingSRC from '../../svg/pendingSVG.svg';
import deleteSRC from '../../svg/deleteSVG.svg';

function TodoItem(props) {

    const onComplete = (id) =>{
        console.log(props.completed);
        alert('Ya completaste el todo '+props.text)
    }
    //const onInComplete = (id) => {
    //    let HTMLtodo = document.getElementById(id);
    //    HTMLtodo.src = check_box_outline_blank_black;
    //    alert('Ya no está completado el todo ' + props.text)
    //}
    const onDelete = (id) => {
        alert('Borraste el todo ' + props.text)
    }

    let svg = <img
        id={
            props.id
        }
        onClick = {
            () => {
                props.onComplete(props.id);
            }
        }
        className = {
            "svg"
        }
        src = {
            props.completed ? completedSRC : pendingSRC
        }
    />;
    
    
    

    return (
        <li className="TodoItem">
            <span 
                className={
                    props.completed ? "Icon Icon-check--active" : "Icon Icon-check"
                }
            >
                {svg}
            </span>
          
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>

            <span 
                className = 'Icon Icon-delete' 
                
            >
                <img src={deleteSRC} onClick={props.onDelete}/>
            </span>
        </li>
    );

}

export { TodoItem };