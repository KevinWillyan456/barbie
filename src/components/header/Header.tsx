import ButtonForHeader from "./ButtonForHeader";
import "./Header.css";
import logo from "/barbie-logo.png";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={logo} alt="React Logo" />
      </a>
      <ul className="navbar">
        <ButtonForHeader>Ínicio</ButtonForHeader>
        <ButtonForHeader>Loja</ButtonForHeader>
        <ButtonForHeader>Comunidade</ButtonForHeader>
        <ButtonForHeader>Blog</ButtonForHeader>
        <ButtonForHeader>Sobre</ButtonForHeader>
      </ul>
    </header>
  );
};

export default Header;
