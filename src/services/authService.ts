import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { auth } from "../../firebase"
import { Timestamp } from "@firebase/firestore"
import { useRouter } from "vue-router"
import { writeDoc } from "./dbService"
import { UserCredential } from "../types/UserCredential"

const googleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider = new GithubAuthProvider()
const router = useRouter()

const createUserInDB = (userCredential: UserCredential, name?: string) => {
  return writeDoc("users", userCredential.user.uid, {
    uid: userCredential.user.uid,
    name: name || userCredential._tokenResponse.fullName,
    email: userCredential.user.email,
    createdAt: Timestamp.fromDate(new Date()),
  })
}

const signUp = async (name: string, email: string, password: string) => {
  const userCredential: unknown = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  createUserInDB(userCredential as UserCredential, name)
}

const signInWithGoogle = async () => {
  let userCred: any = await signInWithPopup(auth, googleAuthProvider)

  let userCredential: UserCredential = userCred

  if (userCredential._tokenResponse.isNewUser) {
    createUserInDB(userCredential)
  }
}

const signInWithGithub = async () => {
  const userCred: any = await signInWithPopup(auth, githubAuthProvider)

  let userCredential: UserCredential = userCred

  if (userCredential._tokenResponse.isNewUser) {
    createUserInDB(userCredential)
  }
}

const signIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
  signOut(auth).then(() => {
    localStorage.removeItem("token")
    router.replace("/")
  })
}

export { signUp, signInWithGoogle, signInWithGithub, signIn, logOut }
