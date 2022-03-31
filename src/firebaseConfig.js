
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBS1S1djuy-VBDTGUEjqeesrHp5Z0_uhcs",
  authDomain: "hitech-fe991.firebaseapp.com",
  projectId: "hitech-fe991",
  storageBucket: "hitech-fe991.appspot.com",
  messagingSenderId: "865996128796",
  appId: "1:865996128796:web:0209570c1117bb756695d9",
  measurementId: "G-BB9DFL6YDE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);