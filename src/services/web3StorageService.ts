import { Service, Web3Storage } from "web3.storage"
import { updateDocInDb } from "../services/dbService"
import { auth } from "../../firebase"

function getAccessToken(): any {
  return import.meta.env.VITE_WEB3STORAGE_TOKEN
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() } as Service)
}

// function getFiles() {
//   const fileInput = document.createElement("input")
//   fileInput.type = "file"
//   fileInput.accept = "image/png, image/jpeg"

//   const filePromise = new Promise((resolve, reject) => {
//     fileInput.onchange = (event: any) => {
//       const selectedFile = event.target.files
//       if (selectedFile) resolve(selectedFile)
//       else reject(null)
//     }
//   })

//   fileInput.click()
//   return filePromise
// }

async function storeFiles(files: any) {
  const client = makeStorageClient()
  const cid = await client.put(files)
  return cid
}

async function uploadImage(files: FileList) {
  console.log(files)
  if (files) {
    const cid = await storeFiles(files)
    const url = `https://${cid}.ipfs.dweb.link/${files[0].name}`
    await updateDocInDb("users", auth.currentUser?.uid as any, {
      profilePhoto: url,
    })
  }
}

export { uploadImage }
