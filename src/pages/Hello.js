import { Link } from 'react-router-dom';
import useAuthUser from '../hooks/useAuthUser';
import LogoutButton from '../components/LogoutButton';

function Hello() {
  const { authUser } = useAuthUser();
  return (
    <div>
      <h1>Hello</h1>
      <div>
        <img src={authUser.photoURL} alt="icon" width="60" height="60" />
        <p>名前: {authUser.displayName}</p>
        <p>メールアドレス: {authUser.email}</p>
        <p>電話番号: {authUser.phoneNumber || '登録なし'}</p>
      </div>
      <p>
        <Link to="/home">home</Link>
      </p>
      <LogoutButton />
    </div>
  );
}

export default Hello;
