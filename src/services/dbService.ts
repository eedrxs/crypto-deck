import {
  doc,
  collection,
  addDoc,
  deleteDoc,
  setDoc,
  updateDoc,
  Timestamp,
} from "@firebase/firestore"
import { db } from "../../firebase"

type WriteDoc = (collectionID: any, docID: any, data: any) => any

const writeDoc: WriteDoc = async (collectionID, docID, data) => {
  await setDoc(doc(db, collectionID, docID), data)
}

const updateDB = () => {}

export { writeDoc, updateDB }
