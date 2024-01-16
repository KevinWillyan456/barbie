import React from "react";
import "./ErrorLoading.css";

const ErrorLoading: React.FC = () => {
    return (
        <div className="error-loading">
            Erro no servidor
            <div>Infelizmente não foi possível carregar os filmes</div>
        </div>
    );
};

export default ErrorLoading;
