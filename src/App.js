import { useEffect } from 'react';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Router from './routes/router';
import firebase, { config } from './utils/firebase';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

firebase.initializeApp(config);

function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => console.log(user.providerData));
  }, []);
  return (
    <div>
      <Router />
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default App;
