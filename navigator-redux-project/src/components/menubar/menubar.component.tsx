import { Link } from 'react-router-dom';
import './_menubar.scss';

interface IMenubarProps {
  id: string,
};

export default function MenuBar({ id }: IMenubarProps) { 
  return (
    <div className="menubar">
      <Link to={`/students/${id}/tests`} className="tests f-c links">tests</Link>
      <Link to={`/students/${id}/asigments`} className="asigments f-c links">asigments</Link>
      <Link to={`/students/${id}/profile`} className="f-c links">profile</Link>
    </div>
  )
}