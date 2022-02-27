import { Outlet, useParams } from 'react-router-dom';
import Menubar from "components/menubar/menubar";
import "./_user.scss";

export default function UserComponent(props: any) {
  var { id } = useParams();
  id = id ? id : "";
  
  return (
    <>    
    <Menubar id={id} />
    <Outlet />    
    </>
  );
}