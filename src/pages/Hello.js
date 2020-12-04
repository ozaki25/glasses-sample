import { Link } from 'react-router-dom';

function Hello() {
  return (
    <div>
      <h1>Hello</h1>
      <Link to="/home">home</Link>
    </div>
  );
}

export default Hello;
