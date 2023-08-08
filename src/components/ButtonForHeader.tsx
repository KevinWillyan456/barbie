import { ReactNode } from "react";

import "./ButtonForHeader.css";

const ButtonForHeader = ({ children }: { children: ReactNode }) => {
  return (
    <li>
      <a href="#">{children}</a>
    </li>
  );
};

export default ButtonForHeader;
