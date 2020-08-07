import firebase from "firebase/app"
import "firebase/firestore"

import { firebaseConfig } from "@/config/firebase.config.js"

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db }
