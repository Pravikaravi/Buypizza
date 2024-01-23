import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage}from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjQ5Dgi4_No0CxR_ovAzypVa3D-BKBwsk",
  authDomain: "restaurant-app-235f2.firebaseapp.com",
  databaseURL: "https://restaurant-app-235f2-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-235f2",
  storageBucket: "restaurant-app-235f2.appspot.com",
  messagingSenderId: "1094356021826",
  appId: "1:1094356021826:web:d8d557cc4bdf48de1833db"
};


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage };