import{getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoZuJDpx2tERV4jA1Fx0DiamsH2-MFOg4",
  authDomain: "dropbox-test-3d18c.firebaseapp.com",
  projectId: "dropbox-test-3d18c",
  storageBucket: "dropbox-test-3d18c.appspot.com",
  messagingSenderId: "462246784455",
  appId: "1:462246784455:web:fb7852cba6d2ddd282fde2"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {db, storage};
