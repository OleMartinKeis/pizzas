import React from "react";

function Order({ closeHour, openHour }) {
    return (
        <div>
            <div className="order">
                <p>
                    We're open from {openHour}:00 to {closeHour}:00. Come visit
                    us or order online.
                </p>
                <button className="btn">Order</button>
            </div>
        </div>
    );
}

export default Order;
