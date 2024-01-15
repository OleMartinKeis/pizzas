import React from "react";
import Pizza from "../pizza";

function Menu() {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                photoName="src\assets\spinaci.jpg"
                price="10"
            />
            <Pizza
                name="Pizza Funghi"
                ingredients="Tomato, mushrooms"
                price="12"
                photoName="src\assets\funghi.jpg"
            />
        </main>
    );
}

export default Menu;
