import { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteusers, editUser } from "store/users-reducer/users.actions";
import { IState } from "store/store";
import { IUser } from "store/users-reducer/users.types";
import Menubar from "components/menubar/menubar";
import studentsContext from 'providers/users/users.context';
import Loading from 'shared/components/loading/loading';
import "./_user.scss";

export default function UserProfile(props: any) {
  const navigate = useNavigate();
  const studentsProviders = useContext(studentsContext);
  const [isLoading, setIsLoading] = useState(true);
  const user: IUser = getUser();
  const [name, setName] = useState(user.name);
  const [desc, setDesc] = useState(user.desc);
  
  let { id }: any = useParams();
  id = id ? id : "";

  useEffect(() => {
    setIsLoading(false);
  }, [user])

  
  //-------------------------
  //Get user data
  //-------------------------
  
  function getUser(): any {
    const _user = studentsProviders.getUser(id);
    if(!_user){
      navigate("/");
    }else{
      return _user;
    }
  };  


  function handleSaveBtnClick() {
    let user = {
      name,
      desc,
      id,
    };
    studentsProviders.handleEdit(user);
  }

  return (
    <>
    { isLoading ? (<Loading />) : (
      <div className="user-wrapper">
        <Menubar id={id} />
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
              onClick={() => studentsProviders.handleDelete(user.id)}
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