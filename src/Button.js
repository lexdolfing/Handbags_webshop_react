import React from 'react';
import './App.css';

export default function Button(props) {
    return(
        <button type="button"
                onClick={props.message}
                disabled={props.disabled}

        >{props.content}</button>
    )
}