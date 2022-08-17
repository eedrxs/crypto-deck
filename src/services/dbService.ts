import {
  doc,
  collection,
  addDoc,
  deleteDoc,
  setDoc,
  getDocs,
  updateDoc,
  Timestamp,
  orderBy,
  query,
} from "@firebase/firestore"
import { db } from "../../firebase"
import { Token } from "../types/Token"
import { UserDetails } from "../types/UserCredential"

const readDocsFromDb: ReadDocsFromDb = async (
  collectionId: string,
  documentId?: string,
  subCollectionId?: string
) => {
  if (documentId && subCollectionId) {
    const subcollectionRef = collection(
      db,
      collectionId,
      documentId,
      subCollectionId
    )
    const q = query(subcollectionRef, orderBy("createdAt", "asc"))
    const querySnapshot = await getDocs(q)
    let result: any = []
    querySnapshot.forEach((doc) => result.push(doc.data()))
    return result
  } else {
    const collectionRef = collection(db, collectionId)
    const querySnapshot = await getDocs(collectionRef)
    let result: any = []
    querySnapshot.forEach((doc) => result.push(doc.data()))
    return result
  }
}

const writeDocToDb: WriteDocToDb<any> = async (
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

interface ReadDocsFromDb {
  (collectionId: string): Promise<any>
  (
    collectionId: string,
    documentId: string,
    subCollectionId: string
  ): Promise<any>
}

interface WriteDocToDb<Data> {
  (collectionId: string, documentId: string, data: Data): Promise<void>
  (
    collectionId: string,
    documentId: string,
    subcollectionId: string,
    data: Data
  ): Promise<void>
}

export { readDocsFromDb, writeDocToDb, updateDB }
