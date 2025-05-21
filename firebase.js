// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBjzgHVxAyqkXG1Nn5Qw1dQcTSJwJgP6mg",
    authDomain: "primerproyecto-3bb22.firebaseapp.com",
    projectId: "primerproyecto-3bb22",
    storageBucket: "primerproyecto-3bb22.firebasestorage.app",
    messagingSenderId: "42355729259",
    appId: "1:42355729259:web:a8a045f4be9a657ad8e22e",
    measurementId: "G-EQBLXQLERY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  export { auth };