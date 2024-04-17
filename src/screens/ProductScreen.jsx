import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import Header from "../components/Header";

import "../css/product.css"
import { useDispatch, useSelector } from "react-redux";

export default function ProductScreen() {

    const basket = useSelector(state => state.basket)
    const dispatch = useDispatch()

    const { id } = useParams()
    const product = products.find((el) => el.id == id)

    return (
        <>
            <Header page={"product"} />
            <div className="container">
                <div className="product_page">
                    <img src={product.img} className="product_page__image"/>
                    <p className="product_page__title">{product.title}</p>
                    <p className="product_page__description">{product.description}</p>
                    <button className="product_page__button" onClick={() => {
                        dispatch({type: "ADD_PRODUCT", payload: product})
                    }}>Добавить в корзину</button>
                </div>
            </div>
        </>
    )
}