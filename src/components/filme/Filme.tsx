import "./Filme.css";

interface IData {
  id: number;
  title: string;
  releaseYear: number;
  synopsis: string;
  cover: string;
}

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
        <a className="trailer" href="#">
          Assistir o Trailer
        </a>
      </div>
    </div>
  );
};

export default Filme;
