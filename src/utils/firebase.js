import dotenv from "dotenv";

dotenv.config();

export const config = {
  apiKey: process.env.FBASE_API_KEY,
  authDomain: process.env.FBASE_AUTH_DOMAIN,
  projectId: process.env.FBASE_PROJECT_ID,
  storageBucket: process.env.FBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FBASE_SENDING_ID,
  appId: process.env.FBASE_APP_ID
};
