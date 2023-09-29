import { createContext } from "react";
import { IData } from "../main";

const MyDataContext = createContext<IData[]>([]);

export default MyDataContext;
