import React from 'react';
import "./App";

export default function Products(props) {
    return (
        <article>
            <span>
            {props.bannerText}
            </span>
            <img src={props.bagImage} alt={props.bagImageAlt}/>
            <p>{props.itemTitle}</p>
            <h4>{props.price}</h4>
        </article>
    )
};