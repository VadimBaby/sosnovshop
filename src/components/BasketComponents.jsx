import React, {useEffect, useState} from "react";
import cart from "../images/cart.png"
import { useSelector } from "react-redux";
import "../css/basket.css"
import { Link } from "react-router-dom";

export default function BasketComponent() {
    
    const basket = useSelector(state => state.basket)
    
    return (
        <Link to="/basket">
                <div className="basket">
                <div className={`basket-badge ${basket.length == 0 ? "invisible" : ""}`}>{basket.reduce((value, element) => {
            return element.count + value
        }, 0)}</div>
                <img src={cart} className="basket-image" />
            </div>
        </Link>
    )
}