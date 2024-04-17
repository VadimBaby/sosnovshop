import React from "react";
import { Link } from "react-router-dom";

export default function Header({page}) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">SosnovShop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/" className={`nav-link ${page == "/" ? "active" : ""}`}>Товары</Link>
                    <Link to="/game" className={`nav-link ${page == "game" ? "active" : ""}`}>Игра</Link>
                    <Link to="/profile" className={`nav-link ${page == "profile" ? "active" : ""}`}>Профиль</Link>
                    <Link to="/feedback" className={`nav-link ${page == "feedback" ? "active" : ""}`}>Отзывы</Link>
                </div>
            </div>
            </div>
        </nav>
    )
}