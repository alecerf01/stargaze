import React from "react";
import "./style.css";

function Footer() {
    const year = new Date().getFullYear();
     
    return (
        <footer className="footer">
            <span>
                <img src="/logo.svg" height="20" className="d-inline-block align-top" alt="stargaze logo" />
            </span> &nbsp;&nbsp;
            <span>© Copyright {year}</span>
        </footer>
    );
}

export default Footer;
