import React from "react";

/* STYLES */
import "../../styles/components/header.scss"; 

export default function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Activity Recommender</h1>
            <p className="header__info">Let's find you something to do</p>
        </header>
    )
}