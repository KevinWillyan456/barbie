import { ReactNode } from "react";

import "./ButtonForHeader.css";
import { Link } from "react-router-dom";

const ButtonForHeader = ({
    children,
    url,
}: {
    children: ReactNode;
    url: string;
}) => {
    return (
        <li>
            <Link to={url}>{children}</Link>
        </li>
    );
};

export default ButtonForHeader;
