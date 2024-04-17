import React, {useState} from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import "../css/feedback.css"
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

export default function EditFeedbackScreen() {

    const { id } = useParams()

    const feedback = useSelector(state => state.feedback.find((el) => el.id == id))

    const [name, setName] = useState(feedback.name)
    const [textFeedback, setTextFeedback] = useState(feedback.feedback)
    const [rate, setRate] = useState(feedback.rate)

    const dispatch = useDispatch()

    return (
        <>
            <Header page={"edit"} />
            <div className="container">
                <div className="edit-feedback feedback-make-order">
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                    <textarea value={textFeedback} onChange={(e) => setTextFeedback(e.target.value)} />
                    <input value={rate} onChange={(e) => setRate(e.target.value)} type="number" />

                    <Link to={"/feedback"}>
                        <Button variant="warning" className="feedback-warning" onClick={() => {
                            dispatch({type: "EDIT_FEEDBACK", payload: {
                                ...feedback,
                                name: name,
                                feedback: textFeedback,
                                rate: rate
                            }})
                        }}>Редактировать</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}