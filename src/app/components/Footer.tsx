import React from "react";

import "../../styles/components/footer.scss";

import {FaGithub} from "react-icons/fa";
import {GoLinkExternal} from "react-icons/go";


export default function Footer() {
    return (
        <footer className="footer">
            <a className="footer__link"
                href="https://github.com/elifaltundag/activity-recommender" 
                target="_blank" 
                rel="noreferrer"
            > 
                <FaGithub />
            </a>
            <a className="footer__link"
                href="https://www.boredapi.com/" 
                target="_blank" 
                rel="noreferrer"
            > 
                <GoLinkExternal />
            </a>
        </footer>
    )
}