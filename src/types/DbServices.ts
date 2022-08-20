export interface ListenToDocInDb {
  (listener: any, collectionId: string, documentId: string): Promise<any>
  (
    listener: any,
    collectionId: string,
    documentId: string,
    subCollectionId: string,
    subDocumentId: string
  ): Promise<any>
}

export interface ListenToCollectionInDb {
  (listener: any, collectionId: string): Promise<any>
  (
    listener: any,
    collectionId: string,
    documentId: string,
    subCollectionId: string
  ): Promise<any>
}

export interface ReadDocsFromDb {
  (collectionId: string): Promise<any>
  (
    collectionId: string,
    documentId: string,
    subCollectionId: string
  ): Promise<any>
}

export interface WriteDocToDb<Data> {
  (collectionId: string, documentId: string, data: Data): Promise<void>
  (
    collectionId: string,
    documentId: string,
    subcollectionId: string,
    data: Data
  ): Promise<void>
}
