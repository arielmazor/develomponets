import { useState, useContext, useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { studentsTestsContext } from 'providers/students-tests.provider';
import { IState } from 'store/store';
import { ITest } from "store/student-tests/student-tests.types";
import Loading from 'shared/components/loading/loading';
import "./_student-tests.scss";

function StudentTests(props: any) {
  const navigate = useNavigate();
  const studentsTestProviders = useContext(studentsTestsContext);
  const [isLoading, setIsLoading] = useState(true);
  
  const params = useParams<'id'>();
  const tests: ITest[] = props.getStudentTests(params.id);

  useEffect(() => {
    (async () => {
      await studentsTestProviders.fetchData(params.id);
      setIsLoading(false);
    })();
  },[])
  
  return (
    <>
    { isLoading ? (<Loading />) : (
      <div className="student-wrapper">
        <div className="viewer-container f-c">
          <div className="viewer-wrapper">
          <Link to="/" className="btn back-btn f-c">
            back
          </Link>
          <div className="list f-c">
          {tests.map((test: ITest, index) => {
            return <div onClick={() => navigate(`/students/${params.id}/tests/${test.id}`)} className="list-item" key={index}>{test.name}</div>
          })}
          </div>
          <Outlet />
          </div>
        </div>
      </div>
    )}
    </>
  );
}

function mapStateToProps(state: IState) {
  return {
   getStudentTests: (id: string) => {
      return state.studentsTests[id];    
   },
  };
}

export default connect(mapStateToProps)(StudentTests);