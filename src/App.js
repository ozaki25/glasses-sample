import firebase from 'firebase/app';

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_PROJECT_ID,
} = process.env;

const config = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_PROJECT_ID,
};

firebase.initializeApp(config);

function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
