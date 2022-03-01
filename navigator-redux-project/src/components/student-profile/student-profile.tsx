import { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { IStudent } from "store/students/students.types";
import studentsContext from 'providers/students/students.context';
import Loading from 'shared/components/loading/loading';
import { IState } from 'store/store';
import "./_student-profile.scss";

function UserProfile(props: any) {
  const navigate = useNavigate();
  var { id }: any = useParams();
  id = id ? id : "";
  useEffect(() => {
    const _student = props.getStudent(id);
    if(!_student){
      navigate("/");
    }
  },[id])
  const studentsProviders = useContext(studentsContext);
  const [isLoading, setIsLoading] = useState(true);
  const student: IStudent = getUser();
  const [name, setName] = useState(student.name || "");
  const [desc, setDesc] = useState(student.desc || "");

  useEffect(() => {
    setIsLoading(false);
  }, [student])


  
  //-------------------------
  //Get student data
  //-------------------------
  
  function getUser(): any {  
    return props.getStudent(id);
  };  


  function handleSaveBtnClick() {
    let student = {
      name,
      desc,
      id,
    };
    
    studentsProviders.updateStudent(student);
  }

  return (
    <>
    { isLoading ? (<Loading />) : (
      <div className="student-wrapper">
        <div key={id} className="viewer-container f-c">
          <div className="viewer-wrapper">
            <div className="wrap">
              <div className="form">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="name-inp"
                  type="text"
                  name="text"
                  autoComplete="off"
                  required
                />
                <label htmlFor="text" className="label-name">
                  <span className="content-name">
                    {name !== "" ? name : "Please enter name"}
                  </span>
                </label>
              </div>
              <div className="form">
                <input
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  type="text"
                  name="text"
                  autoComplete="off"
                  required
                />
                <label htmlFor="text" className="label-name">
                  <span className="content-name">
                    {desc !== "" ? desc : "Please enter desc"}
                  </span>
                </label>
              </div>
            </div>
            <Link
             to="/"
             className="btn back-btn f-c"
             >
             back
             </Link>
            <div onClick={handleSaveBtnClick} className="btn f-c">
              save
            </div>
            <Link
              to="/"
              className="delete-btn f-c"
              onClick={() => studentsProviders.deleteStudent(student.id)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="NSy2Hd cdByRd RTiFqe undefined"
              >
                <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path>
                <path d="M9 8h2v9H9zm4 0h2v9h-2z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

function mapStateToProps(state: IState) {
  return {
    getStudent: (id: string): IStudent | undefined => {
      return state.students.find((student: IStudent) => student.id === id);    
   }
  };
}

export default connect(mapStateToProps)(UserProfile);