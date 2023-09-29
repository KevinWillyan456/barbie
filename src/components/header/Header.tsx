import { AiOutlineMenu } from "react-icons/ai";
import ButtonForHeader from "./ButtonForHeader";
import "./Header.css";
import logo from "/barbie-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">
                    <img src={logo} alt="React Logo" />
                </Link>
                <ul className="navbar">
                    <ButtonForHeader url="/">Ínicio</ButtonForHeader>
                    <ButtonForHeader url="/">Loja</ButtonForHeader>
                    <ButtonForHeader url="/">Comunidade</ButtonForHeader>
                    <ButtonForHeader url="/">Blog</ButtonForHeader>
                    <ButtonForHeader url="/">Sobre</ButtonForHeader>
                </ul>

                {isOpenMenu && (
                    <ul className="navbar-mobile">
                        <ButtonForHeader url="/">Ínicio</ButtonForHeader>
                        <ButtonForHeader url="/">Loja</ButtonForHeader>
                        <ButtonForHeader url="/">Comunidade</ButtonForHeader>
                        <ButtonForHeader url="/">Blog</ButtonForHeader>
                        <ButtonForHeader url="/">Sobre</ButtonForHeader>
                    </ul>
                )}

                <div
                    className="hamburger-menu"
                    onClick={() => {
                        setIsOpenMenu(!isOpenMenu);
                    }}
                >
                    <AiOutlineMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;
