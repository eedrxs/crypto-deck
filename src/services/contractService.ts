// import { ExternalProvider } from "@ethersproject/providers"
// import { use } from "@maticnetwork/maticjs"
// import { Web3ClientPlugin } from "@maticnetwork/maticjs-web3"
import Web3 from "web3"

// use(Web3ClientPlugin)

const web3 = new Web3(Web3.givenProvider)

const getSigner = async () => {
  await window.ethereum.send("eth_requestAccounts")
  return web3.eth.currentProvider
}

const getContract = (abi: any, address: string) => {
  return new web3.eth.Contract(abi, address)
}

export { getSigner, getContract }
