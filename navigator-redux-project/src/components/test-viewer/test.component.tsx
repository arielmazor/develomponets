import { connect } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { IState } from 'store/store';
import { ITest } from 'store/student-tests/student-tests.types';
import './_test.scss';

function TestComponent(props: any) {
  const navigate = useNavigate();
  const { id, testId }: any = useParams() || "";
  
  const test: ITest = props.getTest(id, testId);
  return (
    <>
      <div className="test-outlet">
      <Link to={`/students/${id}/tests`} className="back-btn f-c">back</Link>        
        <div className="wrap">
            <div className="date">{test.date}</div>
          <div className="date-name-wrap">
            <div className="name">{test.name}</div>
          <div className="grade">{test.grade}</div>    
          </div>    
        </div>        
      </div>
    </>
  )
};

function mapStateToProps(state: IState) {
  return {
    getTest: (studentId: string, testId: string): any => {
      return state.studentsTests[studentId].find((test: ITest) => test.id = testId);    
   }
  };
}

export default connect(mapStateToProps)(TestComponent);