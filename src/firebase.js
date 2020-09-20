const firebaseConfig = {
    apiKey: "AIzaSyBV5yS4h-YidE-XhfQ88WsW82z2tJqkykg",
    authDomain: "whatsapp-firebase-8a5ae.firebaseapp.com",
    databaseURL: "https://whatsapp-firebase-8a5ae.firebaseio.com",
    projectId: "whatsapp-firebase-8a5ae",
    storageBucket: "whatsapp-firebase-8a5ae.appspot.com",
    messagingSenderId: "1020137116913",
    appId: "1:1020137116913:web:8032012f9914c7b9fdc550"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()
  export { auth, provider };
  export default db;