import React from "react";
import "../css/basketScreen.css"
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

export default function BasketItem({product}){

    const dispatch = useDispatch()

    return (
        <div className="basket_item">
            <div className="basket_item__container">
                <div className="basket_item-top">
                    <img src={product.img} className="basket_item__img" />
                    <p className="basket_item__title">{product.title}</p>
                </div>
                <p className="basket_item__description">{product.description}</p>
            </div>

            <div className="basket_item__second">
                <div className="basket_item__count">{product.count}</div>
                <Button variant="danger" onClick={() => {
                    dispatch({type: "DELETE_PRODUCT", payload: product.id})
                }}>Удалить</Button>
            </div>
        </div>
    )
}