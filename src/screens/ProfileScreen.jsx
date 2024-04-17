import React, { useState } from "react";
import Header from "../components/Header";
import "../css/profile.css"
import { useDispatch, useSelector } from "react-redux";

export default function ProfileScreen() {

    const userId = useSelector(state => state.user)

    const user = useSelector(state => state.users.find(el => el.id == userId))

    const [name, setName] = useState(user.name)
    const [surname, setSurname] = useState(user.surname)

    const order = useSelector(state => state.order)

    const bonuses = useSelector(state => state.bonuses)

    const dispatch = useDispatch()

    return (
        <>
            <Header page={"profile"} />
            <div className="container">
                <div className="profile">
                    <div className="profile__item-input">
                        <span>Имя</span>
                        <input value={name} onChange={(e) => {
                            setName(e.target.value)
                            dispatch({type: "CHANGE_NAME", payload: {
                                id: userId,
                                name: e.target.value
                            }})
                        }} />
                    </div>
                    <div className="profile__item-input">
                        <span>Фамилия</span>
                        <input value={surname} onChange={(e) => {
                            setSurname(e.target.value)
                            dispatch({type: "CHANGE_SURNAME", payload: {
                                id: userId,
                                surname: e.target.value
                            }})
                        }} />
                    </div>
                </div>

                <div className="order">
                    <p className="order__title">Заказы:</p>
                    {order.map((el, index) => {
                        return (
                            <div className="order-item" key={index}>
                                <div className="order-item__container">
                                    <div className="order-item__title">Заказ:</div>
                                    <div className="order-item__count">Количество: {el.reduce((value, el) => {
                                        return value + el.count
                                    }, 0)}</div>
                                </div>
                                <div className="order-item__price">Стоимость: {el.reduce((value, el) => {
                                    return value + el.price * el.count
                                }, 0)}</div>
                            </div>
                        )
                    })}
                </div>

                <div className="order" style={{marginTop: "50px"}}>
                    <p className="order__title">Бонусы:</p>
                    {bonuses.map((el, index) => {
                        return (
                            <div className="order-item" key={index}>
                                <div className="order-item__container">
                                    <div className="order-item__title">Бонус: {el}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}