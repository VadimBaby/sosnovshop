import React, { useState } from "react";

import "../css/register.css"
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function EnterScreen() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const users = useSelector(state => state.users)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    function enterUser() {
        if (email.trim() == "" || password.trim() == "") {
            return
        }

        const user = users.find((el) => el.email == email.trim() && el.password == password.trim())

        if (user) {
            dispatch({type: "ENTER_USER", payload: user.id})
            navigate("/")
        }
    }

    return (
        <div className="container">
            <div className="register-container">
                <div className="register-form">
                    <div className="form-item">
                        <span className="form-item__text">
                            Введите почту:
                        </span>
                        <input type="mail" value={email} onChange={(e) => setEmail(e.target.value)}  className="form-item__input" />
                    </div>
                    <div className="form-item">
                        <span className="form-item__text">
                            Введите пароль:
                        </span>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="form-item__input" />
                    </div>
                    <Button variant="primary" onClick={enterUser}>Войти</Button>
                    <Link to={"/"} style={{margin: "0 auto", marginTop: "10px"}}>Зарегестрироваться</Link>
                </div>
            </div>
        </div>
    )
}