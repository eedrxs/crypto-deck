// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFuaVyNoyDzhALEkJARK4U7hdLAG1KADk",
  authDomain: "crypto-deck-e9048.firebaseapp.com",
  projectId: "crypto-deck-e9048",
  storageBucket: "crypto-deck-e9048.appspot.com",
  messagingSenderId: "761060312742",
  appId: "1:761060312742:web:257501b0cbf92452149667",
}

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
const db = getFirestore(app)

export default app
export { auth, db }
