import { SetStateAction, useContext, useEffect, useState } from "react";
import Filme from "../filme/Filme";
import "./Main.css";
import { MyDataContext, IData } from "../../context/MyDataContext";
import { AiOutlineClose } from "react-icons/ai";
import Loading from "../loading/Loading";
import ErrorLoading from "../errorloading/ErrorLoading";

const Main = () => {
    const [inputSearch, setInputSearch] = useState("");
    const data = useContext(MyDataContext);
    const [filmes, setFilmes] = useState<IData[]>(
        () => data || ([] as IData[])
    );

    const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
        setInputSearch(e.target.value);
    };

    useEffect(() => {
        if (!data) {
            return;
        }
        const dataSerched = data.filter((filme) => {
            if (inputSearch === " ") {
                return filme;
            }
            return filme.titulo
                .toLowerCase()
                .includes(inputSearch.toLowerCase());
        });

        if (!dataSerched) {
            return setFilmes(data);
        }

        dataSerched.sort((a, b) => {
            const titleA = a.titulo.toUpperCase();
            const titleB = b.titulo.toUpperCase();

            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0;
        });

        setFilmes(dataSerched);
    }, [data, inputSearch]);

    return (
        <main className="main-container">
            <div className="main-title">Filmes da Barbie em Destaque</div>
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Pesquise por um filme..."
                    value={inputSearch}
                    onChange={handleChange}
                />
                <AiOutlineClose
                    className="search-clear"
                    onClick={() => {
                        setInputSearch("");
                    }}
                />
                {inputSearch && (
                    <div className="search-result">
                        Pesquisado: <span>{inputSearch}</span>
                    </div>
                )}
            </div>
            <div className="main-content">
                {data !== null && data.length > 0 ? (
                    filmes.map((item) => <Filme key={item._id} data={item} />)
                ) : data !== null && data.length === 0 ? (
                    <Loading />
                ) : (
                    <ErrorLoading />
                )}
            </div>
        </main>
    );
};

export default Main;
