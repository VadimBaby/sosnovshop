import React, { useState } from "react";

import "../css/register.css"
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function RegisterScreen() {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    function createUser() {

        if (name.trim() == "" || surname.trim() == "" || email.trim() == "" || password.trim() == "") {
            return
        }

        const user = {
            id: Math.floor(Math.random() * 9999),
            name: name.trim(),
            surname: surname.trim(),
            email: email.trim(),
            password: password.trim()
        }

        dispatch({type: "ADD_USER", payload: user})

        setName("")
        setSurname("")
        setEmail("")
        setPassword("")
    }

    return (
        <div className="container">
            <div className="register-container">
                <div className="register-form">
                    <div className="form-item">
                        <span className="form-item__text">
                            Введите имя:
                        </span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}  className="form-item__input" />
                    </div>
                    <div className="form-item">
                        <span className="form-item__text">
                            Введите фамилию:
                        </span>
                        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}  className="form-item__input" />
                    </div>
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
                    <Button variant="primary" onClick={createUser}>Зарегестрироваться</Button>
                    <Link to={"/enter"} style={{marginTop: "10px"}}>Войти</Link>
                </div>
            </div>
        </div>
    )
}