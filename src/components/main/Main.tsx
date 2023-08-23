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
];

const Main = () => {
  return (
    <main className="main-container">
      <div className="main-title">Filmes da Barbie</div>
      {data.map((item) => (
        <Filme key={item.id} data={item} />
      ))}
    </main>
  );
};

export default Main;
