import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export interface IData {
    _id: string;
    titulo: string;
    anoLancamento: number;
    sinopse: string;
    foto: string;
}

export const MyDataContext = createContext<IData[]>([]);

interface ProviderProps {
    children: React.ReactNode;
}

export function MyDataContextProvider({ children }: ProviderProps) {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get(`${import.meta.env.VITE_API_URL}/filme`, {
            headers: {
                Authorization: import.meta.env.VITE_API_KEY,
            },
        })
            .then((response) => {
                setData(response.data.filmes);
                console.log(response.data.filmes);
            })
            .catch((error) => {
                console.error("Erro ao fazer a requisição:", error);
            });
    }, []);

    return (
        <MyDataContext.Provider value={data}>{children}</MyDataContext.Provider>
    );
}
