import { ActionsTypes, IStudent, IStudentAction} from './students.types'

export default function usersReducer(state: IStudent[] = [], action: IStudentAction): IStudent[] {
  switch(action.type) {
    case ActionsTypes.INIT_DATA:
      return setInitData(action.payload.students);
    case ActionsTypes.ADD_STUDENT:
      return addStudent(state, action.payload.data);

    case ActionsTypes.DELETE_STUDENT:
      return deleteStudent(state, action.payload.id);

    case ActionsTypes.EDIT_STUDENT:
      return updateStudent(state, action.payload.student);

    default:
      return state;
  };
};

//------------------
//SetInitData
//------------------

function setInitData(students: IStudent[]): IStudent[] {
  return students;
}

//------------------
//Add student
//------------------

function addStudent(state: IStudent[], data: IStudent): IStudent[] {
  return [
    ...state,
    ...[data]
  ];
}

//------------------
//Delete student
//------------------

function deleteStudent(student: IStudent[], id: string): IStudent[] {
  return updateusersList(student, id, null);
}

//-----------------------------
//Update student
//-----------------------------

function updateStudent(students: IStudent[],student: IStudent): IStudent[] {  
  return updateusersList(students, student.id, student);
}

//-----------------------------
// privates
//-----------------------------

function updateusersList(students: IStudent[], id: string, student: IStudent | null){
  
  let index = getStudentIndex(students, id);
  if(student){
    students[index].name = student.name;
    students[index].desc = student.desc;
  };

  let pointer = student ? index + 1 : index;

  const before = students.slice(0, pointer);
  const after = students.slice(pointer + 1, students.length);

  students = before.concat(after);
  return students;
}

//----------------------------

function getStudentIndex(students: IStudent[], id: string): number{
  let index = students.findIndex(students => students.id === id);
  return index;
}