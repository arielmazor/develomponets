import { Link } from 'react-router-dom';
import './_menubar.scss';

interface IMenubarProps {
  id: string,
};

export default function MenuBar({ id }: IMenubarProps) { 
  return (
    <div className="menubar">
      <Link to={`/users/${id}/grades`} className="grades f-c links">grades</Link>
      <Link to={`/users/${id}/asigments`} className="asigments f-c links">asigments</Link>
      <Link to={`/users/${id}/profile`} className="f-c links">profile</Link>
    </div>
  )
}