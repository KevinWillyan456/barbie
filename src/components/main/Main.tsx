import { SetStateAction, useContext, useEffect, useState } from "react";
import Filme from "../filme/Filme";
import "./Main.css";
import MyDataContext from "../../context/MyDataContext";
import { IData } from "../../main";

const Main = () => {
    const [inputSearch, setInputSearch] = useState("");
    const data = useContext(MyDataContext);
    const [filmes, setFilmes] = useState<IData[]>(data);

    const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
        setInputSearch(e.target.value);
    };

    useEffect(() => {
        const dataSerched = data.filter((filme) => {
            if (inputSearch === " ") {
                return filme;
            }
            return filme.title
                .toLowerCase()
                .includes(inputSearch.toLowerCase());
        });

        if (!dataSerched) {
            return setFilmes(data);
        }

        dataSerched.sort((a, b) => {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();

            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0;
        });

        setFilmes(dataSerched);
    }, [inputSearch]);

    return (
        <main className="main-container">
            <div className="main-title">Filmes da Barbie em Destaque</div>
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Pesquise por um filme..."
                    onChange={handleChange}
                />
                <div className="search-result">
                    Pesquisado:{" "}
                    <span>
                        {inputSearch === "" ? "Sem resultados" : inputSearch}
                    </span>
                </div>
            </div>
            <div className="main-content">
                {filmes.map((item) => (
                    <Filme key={item.id} data={item} />
                ))}
            </div>
        </main>
    );
};

export default Main;
