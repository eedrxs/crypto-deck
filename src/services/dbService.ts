import {
  doc,
  collection,
  addDoc,
  deleteDoc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  Timestamp,
  orderBy,
  query,
  onSnapshot,
} from "@firebase/firestore"
import { db } from "../../firebase"
import { Token } from "../types/Token"
import { UserDetails } from "../types/UserCredential"

const listenToDb: ListenToDb = async (
  listener: any,
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
    const q = query(subcollectionRef, orderBy("createdAt", "desc"))
    const unsubscriber = onSnapshot(q, (querySnapshot) => {
      const result: any = []
      querySnapshot.forEach((doc) => result.push(doc.data()))
      listener.value = result
    })
    return unsubscriber
  } else {
    const collectionRef = collection(db, collectionId)
    const unsubscriber = onSnapshot(collectionRef, (querySnapshot) => {
      const result: any = []
      querySnapshot.forEach((doc) => result.push(doc.data()))
      listener.value = result
    })
    return unsubscriber
  }
}

const readDocFromDb = async (collectionId: string, documentId: string) => {
  const docRef = doc(db, collectionId, documentId)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}

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
    const q = query(subcollectionRef, orderBy("createdAt", "desc"))
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

interface ListenToDb {
  (listener: any, collectionId: string): Promise<any>
  (
    listener: any,
    collectionId: string,
    documentId: string,
    subCollectionId: string
  ): Promise<any>
}

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

export { readDocFromDb, readDocsFromDb, writeDocToDb, listenToDb }
