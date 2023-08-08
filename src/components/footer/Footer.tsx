import { BsDiscord, BsTelegram } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

import logo from "/barbie-logo.png";
import sslCertificado from "/ssl-certificado.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
          <div className="greetings">
            Seja bem-vindo ao site oficial da Barbie, o lugar mágico onde a
            diversão, a imaginação e a moda se unem para criar momentos
            inesquecíveis. Explore o universo colorido e inspirador da Barbie,
            onde cada clique abre as portas para aventuras emocionantes e
            criativas.
          </div>

          <div className="social">
            <a href="#">
              <BsDiscord />
            </a>
            <a href="#">
              <BsTelegram />
            </a>
            <a href="#">
              <AiFillFacebook />
            </a>
            <a href="#">
              <AiFillTwitterCircle />
            </a>
            <a href="#">
              <AiFillLinkedin />
            </a>
            <a href="#">
              <AiFillYoutube />
            </a>
            <a href="#">
              <AiFillInstagram />
            </a>
          </div>

          <div className="certificados">
            <img src={sslCertificado} alt="ssl certificado" />
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <h2>Produtos</h2>
            </li>
            <li>
              <a href="#">Bonecas</a>
            </li>
            <li>
              <a href="#">Casinhas</a>
            </li>
            <li>
              <a href="#">Bolsas</a>
            </li>
            <li>
              <a href="#">Cadernos</a>
            </li>
            <li>
              <a href="#">Descubra</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <h2>Comunidade</h2>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <h2>Blog</h2>
            </li>
            <li>
              <a href="#">Barbie</a>
            </li>
            <li>
              <h2>Youtube</h2>
            </li>
            <li>
              <a href="#">Barbie YT</a>
            </li>
            <li>
              <h2>Linkedin</h2>
            </li>
            <li>
              <a href="#">Barbie</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <h2>Sponsors</h2>
            </li>
            <li>
              <a href="#">Google</a>
            </li>
            <li>
              <a href="#">Mercado Livre</a>
            </li>
            <li>
              <a href="#">Amazon</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">@ 2019-2023 Barbie</div>
        <div className="wrap">
          <a href="#" className="terms">
            Termos do Serviço
          </a>
          <a href="#" className="privacy-policy">
            Política de Privacidade
          </a>
          <div>|</div>
          <div className="language">
            <TbWorld />
            Português BR
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
