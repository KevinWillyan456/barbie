import { ReactNode } from "react";

import "./ButtonForHeader.css";

const ButtonForHeader = ({ children, url }: { children: ReactNode, url: string }) => {
  return (
    <li>
      <a href={url}>{children}</a>
    </li>
  );
};

export default ButtonForHeader;
