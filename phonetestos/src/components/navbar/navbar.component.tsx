import { useContext } from 'react';
import { studentsContext } from 'providers/students.provider';
import './_navbar.scss';

export default function Navbar() { 
  const studentsProvider = useContext(studentsContext);

  //------------------
  //add student
  //------------------

  function addStudent(){
    studentsProvider.addStudent()
      .then(() => console.log("pablo"))
      .catch((err: any) => console.error(err));
  };

  return (
    <nav>
      <div className="left-side"></div>
      <div className="add-side">
        <div
          className="btn f-c"
          onClick={() => addStudent()}
        >
          +
        </div>
      </div>
      <div className="right-side"></div>
    </nav>
  )
};