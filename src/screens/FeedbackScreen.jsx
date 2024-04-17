import React, { useState } from "react";
import Header from "../components/Header";
import "../css/feedback.css"
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FeedbackScreen() {
    
    const [name, setName] = useState("")
    const [feedback, setFeedback] = useState("")
    const [rate, setRate] = useState(0)

    const feedbacks = useSelector((state) => state.feedback)

    const dispatch = useDispatch()

    function addFeedback() {
        if (name != "" && feedback != "") {
            dispatch({type: "ADD_FEEDBACK", payload: {
                id: Math.floor(Math.random() * 9999),
                name: name,
                feedback: feedback,
                rate: rate,
                date: Date()
            }})

            setName("")
            setFeedback("")
            setRate(0)
        }
    }

    return (   
        <>
            <Header page={"feedback"} />
            <div className="container">
                <div className="feedback">
                    <div className="feedback-title">Отзывы:</div>
                    {feedbacks.map((el, index) => {
                        return (
                            <div className="feedback-item" key={index}>
                                <div className="feedback-item__main">
                                    <div className="feedback-item__right">
                                        <div className="feedback-item__name">
                                            <span>Имя: {el.name}</span>
                                        </div>
                                        <div className="feedback-item__description">
                                            <span>Отзыв: {el.feedback}</span>
                                        </div>
                                        <div className="feedback-item__rate">
                                            <span>Оценка: {el.rate}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <Link to={`/edit/${el.id}`}>
                                            <Button variant="warning" className="feedback-warning">Редактировать</Button>
                                        </Link>
                                        <Button variant="danger" className="feedback-danger" onClick={() => {
                                            dispatch({type: "REMOVE_FEEDBACK", payload: el.id})
                                        }}>Удалить</Button>
                                    </div>    
                                </div>
                                <div className="feedback-item__line">
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="feedback-make-order">
                    <input placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
                    <textarea placeholder="Отзыв" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                    <input placeholder="Оценка" value={rate} onChange={(e) => {
                        let value = e.target.value

                        if (value < 6 || value >= 0) {
                            setRate(e.target.value)
                        }
                    }} type="number" />
                    <Button variant="primary" onClick={() => {
                        addFeedback()
                    }}>Оставить отзыв</Button>
                </div>
            </div>
        </>
    )
}