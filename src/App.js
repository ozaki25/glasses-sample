import Router from './routes/router';
import firebase, { config } from './utils/firebase';
import Login from './components/Login';
import useAuthUser from './hooks/useAuthUser';

firebase.initializeApp(config);

function App() {
  const { authUser } = useAuthUser();
  console.log({ authUser });
  return authUser ? <Router /> : <Login />;
}

export default App;
