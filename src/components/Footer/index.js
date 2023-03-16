import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <span>
                <img src="/logo.svg"
                    height="40"
                    className="d-inline-block align-top"
                    alt="stargaze logo"
                />
            </span>
            <span>© Copyright 2023</span>
        </footer>
    );
}

export default Footer;
