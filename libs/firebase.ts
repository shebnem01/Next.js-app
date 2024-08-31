import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBFBt9RuK2soWxdARJFvMKV8GbY7DOykYw",
  authDomain: "nextjs-prisma-project-3d8da.firebaseapp.com",
  projectId: "nextjs-prisma-project-3d8da",
  storageBucket: "nextjs-prisma-project-3d8da.appspot.com",
  messagingSenderId: "967931303446",
  appId: "1:967931303446:web:b555c373d30c6af3e48737"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;