import{getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCSPq4FVnyP98bQr8R94TP_LVnQvoRMTYw",
  authDomain: "dropbox-clone-9e05a.firebaseapp.com",
  projectId: "dropbox-clone-9e05a",
  storageBucket: "dropbox-clone-9e05a.appspot.com",
  messagingSenderId: "161684292550",
  appId: "1:161684292550:web:1859f5d9711758b76568c7"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
 export {db, storage};
