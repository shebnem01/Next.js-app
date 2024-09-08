import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.FIRBASE_API_KEY,
  authDomain: "nextjs-prisma-project-3d8da.firebaseapp.com",
  projectId: "nextjs-prisma-project-3d8da",
  storageBucket: "nextjs-prisma-project-3d8da.appspot.com",
  messagingSenderId: "967931303446",
  appId: process.env.FIRBASE_API_ID
};

const app = initializeApp(firebaseConfig);
export default app;