import React from "react";
import "../css/basketScreen.css"
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";
import Header from "../components/Header";

export default function BasketScreen() {

    const basket = useSelector(state => state.basket)

    const dispatch = useDispatch()

    if (basket.length == 0) {
        return (
            <>
                <Header page={"basket"} />
                <div className="container">
                <div className={`basket-empty`}>
                        <p>Корзина пустая</p>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <Header page={"basket"} />
                <div className="container">
                    <div className={`basket_screen`}>
                        {basket.map((el, index) => {
                            return <BasketItem product={el} key={index} />
                        })}

                        <div className="basket_screen__cost">
                            <span>Итого:</span>
                            <span>{basket.reduce((value, el) => {
                                return value + el.price * el.count
                            }, 0)}</span>
                        </div>

                        <button className="button-make-order" onClick={() => {
                            dispatch({type: "ADD_ORDER", payload: basket})
                            dispatch({type: "RESET_BASKET"})
                        }}>Сделать заказ</button>
                    </div>
                </div>
            </>
        )
    }
}