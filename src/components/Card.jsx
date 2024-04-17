import React from "react";
import { Button } from "react-bootstrap";
import "../css/card.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Card({product}) {

    const dispatch = useDispatch()

    return (
        <div className="product">
            <div className="product-image">
                <img src={product.img} />
            </div>
            <div className="product-bottom">
                <span className="product-title">{product.title}</span>
                <span className="product-description">{product.description}</span>
                <Link to={`product/${product.id}`} className="product-else">Подробнее</Link>
                <span className="product-rate">Рейтинг: {product.rate}</span>
                <span className="product-price">{product.price}Р</span>
                <Button variant="primary" onClick={() => {
                    dispatch({type: "ADD_PRODUCT", payload: product})
                }}>Добавить в Корзину</Button>
            </div>
        </div>
    )
}