import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";
// import "firebase/analytics";
// import "firebase/functions";
// import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`,
  projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID}`,
  appId: `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`,
  //   measurementId: `${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.database();
// const storage = firebase.storage();
// const functions = firebase.functions();

export { auth, db };
// , storage, functions };
