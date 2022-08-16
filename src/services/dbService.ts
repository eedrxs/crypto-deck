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
import { Token } from "../types/Token"
import { UserDetails } from "../types/UserCredential"

// type WriteDoc = (collectionID: any, docID: any, data: any) => any

interface WriteDoc<Data> {
  (collectionId: string, documentId: string, data: Data): Promise<void>
  (
    collectionId: string,
    documentId: string,
    subcollectionId: string,
    data: Data
  ): Promise<void>
}

const writeToDb: WriteDoc<any> = async (
  collectionId: string,
  documentId: string,
  dataOrSubcollectionId: string | UserDetails,
  data?: Token
) => {
  if (data && typeof dataOrSubcollectionId === "string") {
    await setDoc(doc(db, collectionId, documentId, dataOrSubcollectionId), data)
  }
  if (typeof dataOrSubcollectionId !== "string") {
    await setDoc(doc(db, collectionId, documentId), dataOrSubcollectionId)
  }
}

const updateDB = () => {}

export { writeToDb, updateDB }
