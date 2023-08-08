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
            <BsDiscord />
            <BsTelegram />
            <AiFillFacebook />
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
            <AiFillInstagram />
          </div>

          <div className="certificados">
            <img src={sslCertificado} alt="ssl certificado" />
          </div>
        </div>
        <div className="footer-links-1">
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
          </ul>
        </div>
        <div className="footer-links-2">
          <ul>
            <li>
                <h2>Comunidade</h2>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-links-3">
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
        <div className="footer-links-4">
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
        <div className="terms">Termos do Serviço</div>
        <div className="privacy-policy">Política de Privacidade</div>
        <div className="language">
          <TbWorld />
          English
        </div>
      </div>
    </footer>
  );
};

export default Footer;
