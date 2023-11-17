import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";

dotenv.config();

//FireBaseConfig
const firebaseConfig = {
    apiKey: process.env.FBASE_API_KEY,
    authDomain: process.env.FBASE_AUTH_DOMAIN,
    projectId: process.env.FBASE_PROJECT_ID,
    storageBucket: process.env.FBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FBASE_SENDING_ID,
    appId: process.env.FBASE_APP_ID,
    measurementId: process.env.FBASE_MEASUREMENT_ID
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export default db;