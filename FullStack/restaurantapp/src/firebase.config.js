import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBxuhauLusINTCh4rwh1LGQBCLP2yqTGd4",
    authDomain: "restaurantapp-40d19.firebaseapp.com",
    databaseURL: "https://restaurantapp-40d19-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-40d19",
    storageBucket: "restaurantapp-40d19.appspot.com",
    messagingSenderId: "721648975331",
    appId: "1:721648975331:web:390e5610c6576a16deb4d6"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };







