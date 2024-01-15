import React from "react";

function Pizza(props) {
    return (
        <div>
            <img src={props.photoName} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.ingredients}</p>
        </div>
    );
}

export default Pizza;
