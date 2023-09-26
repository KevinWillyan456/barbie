import ButtonForHeader from "./ButtonForHeader";
import "./Header.css";
import logo from "/barbie-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo">
          <img src={logo} alt="React Logo" />
        </a>
        <ul className="navbar">
          <ButtonForHeader url="/">Ínicio</ButtonForHeader>
          <ButtonForHeader url="/">Loja</ButtonForHeader>
          <ButtonForHeader url="/">Comunidade</ButtonForHeader>
          <ButtonForHeader url="/">Blog</ButtonForHeader>
          <ButtonForHeader url="/">Sobre</ButtonForHeader>
        </ul>
      </div>
    </header>
  );
};

export default Header;
