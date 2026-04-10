import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB4Ny2vT5xStmtJ29cOFfH2hOI3WUEykC0",
  authDomain: "studyoptimizer-iot.firebaseapp.com",
  databaseURL: "https://studyoptimizer-iot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "studyoptimizer-iot",
  storageBucket: "studyoptimizer-iot.firebasestorage.app",
  messagingSenderId: "913287865614",
  appId: "1:913287865614:web:ba1586940230f0f075a35f",
  measurementId: "G-0M72NZN4S7"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);