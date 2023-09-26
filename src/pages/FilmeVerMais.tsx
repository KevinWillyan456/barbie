import { Link, useParams } from "react-router-dom";
import MyDataContext from "../context/MyDataContext";
import { useContext } from "react";
import Header from "../components/header/Header";
import "./FilmeVerMais.css";

function FilmeVerMais() {
  let { id } = useParams();
  const data = useContext(MyDataContext);

  const numericId = id ? parseInt(id, 10) : undefined;

  const filmeEncontrado = data.find((item) => item.id === numericId);

  if (filmeEncontrado === undefined) {
    return;
  }

  return (
    <>
      <Header />
      <div className="voltar-ver-mais">
        <Link to="/">Voltar</Link>
      </div>
      <div className="filme-content-ver-mais">
        <div className="title">{filmeEncontrado.title}</div>
        <div className="box">
          <div className="cover">
            <img src={filmeEncontrado.cover} alt={filmeEncontrado.title} />
          </div>
          <div className="wrap">
            <div className="release-year">{filmeEncontrado.releaseYear}</div>
            <div className="synopsis">{filmeEncontrado.synopsis}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilmeVerMais;
