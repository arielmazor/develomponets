import { useEffect, useContext } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { IStudent } from 'store/students/students.types';
import { IState } from 'store/store';
import Menubar from "components/menubar/menubar.component";
import { studentsContext } from 'providers/students/students.provider';
import "./_student.scss";

export default function Student(props: any) {
  const navigate = useNavigate();
  const studentsProvider = useContext(studentsContext);
  var { id } = useParams();
  id = id ? id : "";
  
  useEffect(() => {
    if(!studentsProvider.isStudentExist(id)){
      navigate("/")
    };
  },[id])

  return (
    <>    
    <Menubar id={id} />
    <div className="outlet f-c">
    <Outlet />    
    </div>
    </>
  );
}