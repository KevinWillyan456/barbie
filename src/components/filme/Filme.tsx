import { Link } from "react-router-dom";
import { IData } from "../../context/MyDataContext";
import "./Filme.css";

const Filme = ({ data }: { data: IData }) => {
    return (
        <div className="filme-content">
            <div className="title">{data.title}</div>
            <div className="cover">
                <img src={data.cover} alt={data.title} />
            </div>
            <div className="wrap">
                <div className="release-year">{data.releaseYear}</div>
                <div className="synopsis">{data.synopsis}</div>
                <Link to={`/filme-ver-mais/${data.id}`} className="trailer">
                    Ver Mais
                </Link>
            </div>
        </div>
    );
};

export default Filme;
