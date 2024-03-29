import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export interface IData {
    _id: string;
    titulo: string;
    anoLancamento: number;
    dataCriacao: Date;
    sinopse: string;
    foto: string;
    trailer: string;
}

export const MyDataContext = createContext<IData[] | null>([]);

interface ProviderProps {
    children: React.ReactNode;
}

export function MyDataContextProvider({ children }: ProviderProps) {
    const [data, setData] = useState<IData[] | null>([]);

    useEffect(() => {
        api.get(`${import.meta.env.VITE_API_URL}/filme`, {
            headers: {
                Authorization: import.meta.env.VITE_API_KEY,
            },
        })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setData(null);
                console.error("Erro ao fazer a requisição:", error);
            });
    }, []);

    return (
        <MyDataContext.Provider value={data}>{children}</MyDataContext.Provider>
    );
}
