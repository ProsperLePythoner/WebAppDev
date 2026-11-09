import { createRoot } from 'react-dom/client';

const names = ['Jennifer', 'Karen', 'Brendan', 'Sheridan'];

const student_grades = [
  {id: 1, name: 'Jennifer', score: 90},
  {id: 2, name: 'Karen', score: 80},
  {id: 3, name: 'Brendan', score: 75},
  {id: 4, name: 'Sheridan', score: 50}
];

function list_names() {
  return(
    <ul>
      {names.map(name => <li key={name}>{ name }</li>)}
    </ul>
  )
}

function display_grades() {
  return(
    <ul>
      { student_grades.map(
        student => <li key={student}>{ student.name }'s score is { student.score } </li>
      ) }
    </ul>
  )
}

const myElement = (
  <form>
    <div>
      <label id='usernameLabel'>
        Enter your username here: 
      </label>
      <input id='username' name="username" placeholder='@username101...'></input>
    </div>
  </form>
);

createRoot(document.getElementById('root')).render(
  display_grades()
)