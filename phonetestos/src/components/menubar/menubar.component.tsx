import { useState } from "react";
import { Link } from "react-router-dom";
import "./_menubar.scss";

interface IMenubarProps {
  id: string;
};

export default function MenuBar({ id }: IMenubarProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="menubar">
      <div className="wrap">
      <div className={isOpen ? "menu-btn open" : "menu-btn"} onClick={() => setIsOpen(!isOpen)}>
        <div className="menu-btn__burger"></div>
      </div>
      </div>
      <div className={isOpen ? "menu open" : "menu"} >
        <div className="header">
          <div className="icon"></div>
        </div>
        <div className="links-list" onClick={() => setIsOpen(!isOpen)}>
          <Link to={`/students/${id}/tests`} className="tests f-c links">
            tests
          </Link>
          <Link to={`/students/${id}/asigments`} className="asigments f-c links">
            asigments
          </Link>
          <Link to={`/students/${id}/profile`} className="f-c links">
            profile
          </Link>
        </div>
      </div>
    </div>
  );
};