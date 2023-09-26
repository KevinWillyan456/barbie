import { createContext } from "react";
import { IData } from "../App";

const MyDataContext = createContext<IData[]>([]);

export default MyDataContext;
