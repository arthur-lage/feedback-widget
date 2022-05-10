import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0Z-Xtnf2tee8LZFNeHrTw4_QdM547E80",
  authDomain: "feedbacks-widget.firebaseapp.com",
  projectId: "feedbacks-widget",
  storageBucket: "feedbacks-widget.appspot.com",
  messagingSenderId: "234555980680",
  appId: "1:234555980680:web:862b8c8a3747356bbf583d",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
