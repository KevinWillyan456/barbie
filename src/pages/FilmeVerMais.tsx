import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./FilmeVerMais.css";
import { MyDataContext } from "../context/MyDataContext";

function FilmeVerMais() {
    const { id } = useParams();
    const data = useContext(MyDataContext);

    const filmeEncontrado = data?.find((item) => item._id === id);

    if (filmeEncontrado === undefined) {
        return (
            <div className="filme-undefined">
                <div className="filme-undefined-content">
                    Esse filme não existe
                </div>
                <Link to="/">Voltar</Link>
            </div>
        );
    }

    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <div className="filme-title-ver-mais-content">
                <div className="filme-title-ver-mais">
                    Veja mais de: <span>{filmeEncontrado.titulo}</span>
                </div>
            </div>
            <div className="voltar-ver-mais">
                <Link to="/">Voltar</Link>
            </div>
            <div className="filme-content-ver-mais">
                <div className="title">{filmeEncontrado.titulo}</div>
                <div className="box">
                    <div className="cover">
                        <img
                            src={filmeEncontrado.foto}
                            alt={filmeEncontrado.titulo}
                        />
                    </div>
                    <div className="wrap">
                        <div className="release-year">
                            {filmeEncontrado.anoLancamento}
                        </div>
                        <div className="synopsis">
                            {filmeEncontrado.sinopse}
                        </div>
                    </div>
                </div>

                {filmeEncontrado.trailer ? (
                    <div className="trailer-container">
                        <p className="trailer-info">Assista ao Trailer</p>
                        <iframe
                            className="trailer-content"
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${filmeEncontrado.trailer}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                ) : (
                    <div className="trailer-message">Trailer indisponível</div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default FilmeVerMais;
