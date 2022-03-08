import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { IStudent } from "store/students/students.types";
import { deleteStudentAction } from "store/students/students.actions";
import { IState } from "store/store";
import "./_student-profile.scss";
import { studentsContext } from "providers/students.provider";
import Loading from "shared/components/loading/loading";

function UserProfile(props: any) {
  const studentsProvider = useContext(studentsContext);
  const params = useParams<'id'>();
  const [isLoading, setIsLoading] = useState(false);
  const [student, setStudent] = useState(props.getStudent(params.id));
  const [name, setName] = useState(student.name || "");
  const [desc, setDesc] = useState(student.desc || "");

  function updateStudent() {
    let student = {
      name,
      desc,
      id: params.id,
    };
    setIsLoading(true);
    studentsProvider.updateStudent(student)
      .then(() => setIsLoading(false))
      .catch((err: string) => console.error(err));
  }

  return (
    <>
    { isLoading ? <Loading /> : (
       <div className="profile-wrapper">
       <div className="avatar section">
         <div className="wrap">
           <div className="title">Avatar</div>
           <div className="desc">Your picture is used in shared projects</div>
         </div>
         <div className="avatar-img">
         <img src={ require('shared/components/svgs/arik.png') } />
         </div>
       </div>
       <div className="name section">
         <div className="wrap">  
           <div className="title">Name</div>
           <div className="desc">{name}</div>
         </div>
       </div>
       <div className="desc section">
         <div className="wrap">
           <div className="title">Desc</div>
           <div className="desc">{desc}</div>
         </div>
       </div>
         {/* <>
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
           <Link to="/" className="btn back-btn f-c">
             back
           </Link>
           <div onClick={updateStudent} className="btn f-c">
             save
           </div>
           <Link
             to="/"
             className="delete-btn f-c"
             onClick={() => props.deleteStudent(student.id)}
           >
             <TrashSvg />
           </Link>
         </> */}
     </div>
    )}
    </>
  );
}

function mapStateToProps(state: IState) {
  return {
    getStudent: (id: string): IStudent => {
      return state.students.find((student: IStudent) => student.id === id);
    },
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      deleteStudent: deleteStudentAction,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
