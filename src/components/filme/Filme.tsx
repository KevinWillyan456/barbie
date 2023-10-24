import { Link } from "react-router-dom";
import { IData } from "../../context/MyDataContext";
import "./Filme.css";

const Filme = ({ data }: { data: IData }) => {
    return (
        <div className="filme-content">
            <div className="title">{data.titulo}</div>
            <div className="cover">
                <img src={data.foto} alt={data.titulo} />
            </div>
            <div className="wrap">
                <div className="release-year">{data.anoLancamento}</div>
                <div className="synopsis">{data.sinopse}</div>
                <Link to={`/filme-ver-mais/${data._id}`} className="trailer">
                    Ver Mais
                </Link>
            </div>
        </div>
    );
};

export default Filme;
