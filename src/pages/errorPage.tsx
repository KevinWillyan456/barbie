import { Link, useRouteError } from "react-router-dom";
import "./errorPage.css";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Desculpe, ocorreu um erro inesperado</p>
            <Link to={"/"}>Voltar</Link>
        </div>
    );
}
