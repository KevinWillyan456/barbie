import { SetStateAction, useState } from "react";
import Filme from "../filme/Filme";
import "./Main.css";

const data = [
  {
    id: 1,
    title: "Barbie",
    releaseYear: 2023,
    synopsis:
      "No mundo mágico das Barbies, 'Barbieland', uma das bonecas começa a perceber que não se encaixa como as outras. Depois de ser expulsa, ela parte para uma aventura no 'mundo real', onde descobre que a beleza está no interior de cada um.",
    cover:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg",
  },
  {
    id: 2,
    title: "Barbie em as 12 Princesas Bailarinas",
    releaseYear: 2006,
    synopsis:
      "Barbie está de volta em uma nova aventura mágica e musical, junto de suas irmãs princesas! Quando a malvada tia Rowena se muda para o castelo, ela proíbe que as princesas dancem ou cantem para sempre, pois ela acredita que não é o tipo de...",
    cover:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d1WbtY6ThUE2P7riFqmPIYCnUdi.jpg",
  },
  {
    id: 3,
    title: "Barbie Butterfly: A Nova Aventura em Fairytopia",
    releaseYear: 2008,
    synopsis:
      "A doce Borboleta deve encontrar forças para derrotar a mlavada Fada Henna e salvar a Borboleta-rainha.",
    cover:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/trsrW7gDWxYSOUnW9pdSYPNXvVf.jpg",
  },
  {
    id: 4,
    title: "Barbie em a Pequena Polegar",
    releaseYear: 2009,
    synopsis:
      "Conheça a pequenina garota chamada Polegarzinha. Ela vive em harmonia com a natureza no mundo mágico de Twillerbees, um vasto jardim coberto...",
    cover:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hYzx0RsnQdT66ZM8PmXoUcjpH5F.jpg",
  },
  {
    id: 5,
    title: "Barbie A Princesa e a Plebéia",
    releaseYear: 2004,
    synopsis:
      "Barbie interpreta Anneliese e sua melhor amiga Teresa interpreta Érika. Ambas sonham em serem livres, pois Anneliese está sendo obrigada a se...",
    cover:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lJx8GmoyE2mNUxvYBlr4ARrz3z.jpg",
  },
  {
    id: 6,
    title: "Barbie: O Poder das Sereias",
    releaseYear: 2022,
    synopsis:
      "Brooklyn, Malibu e as irmãs Skipper, Stacie e Chelsea embarcam em uma aventura submarina enquanto se transformam em sereias para ajudar a...",
    cover:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8qb8cLDBAWdahrtixN2mQdI6e52.jpg",
  },
];

const Main = () => {
  const [inputSearch, setInputSearch] = useState("");

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputSearch(e.target.value);
  };

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
          <span>{inputSearch === "" ? "Sem resultados" : inputSearch}</span>
        </div>
      </div>
      <div className="main-content">
        {data.map((item) => (
          <Filme key={item.id} data={item} />
        ))}
      </div>
    </main>
  );
};

export default Main;
