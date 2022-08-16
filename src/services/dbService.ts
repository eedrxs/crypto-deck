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

interface WriteToDb<Data> {
  (collectionId: string, documentId: string, data: Data): Promise<void>
  (
    collectionId: string,
    documentId: string,
    subcollectionId: string,
    data: Data
  ): Promise<void>
}

// const readFromDb

const writeToDb: WriteToDb<any> = async (
  collectionId: string,
  documentId: string,
  dataOrSubcollectionId: string | UserDetails,
  data?: Token
) => {
  if (data && typeof dataOrSubcollectionId === "string") {
    const subcollectionRef = collection(
      db,
      collectionId,
      documentId,
      dataOrSubcollectionId
    )
    await setDoc(doc(subcollectionRef), data)
  }
  if (typeof dataOrSubcollectionId !== "string") {
    const docRef = doc(db, collectionId, documentId)
    await setDoc(docRef, dataOrSubcollectionId)
  }
}

const updateDB = () => {}

export { writeToDb, updateDB }
