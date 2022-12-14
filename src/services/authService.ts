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
import { writeDocToDb } from "./dbService"
import { UserCredential } from "../types/UserCredential"

const googleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider = new GithubAuthProvider()

const createUserInDB = (userCredential: UserCredential, name?: string) => {
  return writeDocToDb("users", userCredential.user.uid, {
    uid: userCredential.user.uid,
    name: name || (userCredential._tokenResponse.fullName as string),
    email: userCredential.user.email,
    createdAt: Timestamp.fromDate(new Date()),
  })
}

const signUp = async (name: string, email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  createUserInDB(userCredential as any as UserCredential, name)
}

const signInWithGoogle = async () => {
  const userCredential = (await signInWithPopup(
    auth,
    googleAuthProvider
  )) as any as UserCredential

  if (userCredential._tokenResponse.isNewUser) {
    createUserInDB(userCredential)
  }
}

const signInWithGithub = async () => {
  const userCredential = (await signInWithPopup(
    auth,
    githubAuthProvider
  )) as any as UserCredential

  if (userCredential._tokenResponse.isNewUser) {
    createUserInDB(userCredential)
  }
}

const signIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
}

const logOut = async () => {
  await signOut(auth)
  sessionStorage.removeItem("user-id")
  window.location.assign("/")
}

export { signUp, signInWithGoogle, signInWithGithub, signIn, logOut }
