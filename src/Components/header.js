import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
return (
    <header className="header">
        <nav className="navbar">
            <ul className="menu">
                <li className="menu-item">
                    <Link to="/" className="logo">MyFinance</Link>
                </li>
                <li className="menu-item">                    
                    <Link to="/" className="home">Home</Link>
                </li>
                <li className="menu-item">
                    <Link to="/app2" className="transacoes">Transações</Link>
                </li>
            </ul>
        </nav>
    </header>
);
};

export default Header;