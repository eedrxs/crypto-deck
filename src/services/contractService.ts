import Web3 from "web3"
import contracts from "../config/contract"
import { writeDocToDb } from "./dbService"
import { auth } from "../../firebase"
import { serverTimestamp } from "@firebase/firestore"

const web3 = new Web3(Web3.givenProvider)

const getEthereumSigner = async () => {
  await window.ethereum.request({ method: "eth_requestAccounts" })
  return web3.eth.currentProvider
}

const createPolygonToken = async (signer: any, tokenData: any) => {
  const {
    name,
    symbol,
    initialSupply,
    mintable,
    burnable,
    decimals,
    tokenType,
  } = tokenData
  const { abi, address, gas, gasPrice } = contracts.polygonMumbai
  const options = {
    from: signer.selectedAddress,
    gas,
    gasPrice,
  }
  const erc20Factory = new web3.eth.Contract(abi as any, address, options)
  const newToken = decimals
    ? await erc20Factory?.methods
        .createTokenDecimals(
          name,
          symbol,
          initialSupply,
          mintable,
          burnable,
          decimals
        )
        .send()
    : await erc20Factory?.methods
        .createToken(name, symbol, initialSupply, mintable, burnable)
        .send()

  const eventFilter = { creatorAddress: signer.selectedAddress }
  erc20Factory.events.TokenCreated(eventFilter, (error: any, event: any) => {
    console.log(tokenData)

    addPolygonTokenToDb(tokenData, event, error)
  })

  return newToken
}

async function addPolygonTokenToDb(
  tokenData: any,
  tokenCreationEvent: any,
  error: any
) {
  const DEFAULT_DECIMALS = 18
  const {
    name,
    symbol,
    initialSupply,
    mintable,
    burnable,
    decimals,
    tokenType,
  } = tokenData
  const { contractAddress } = tokenCreationEvent.returnValues
  console.log(tokenData)
  await writeDocToDb(
    "users",
    auth.currentUser?.uid as any as string,
    "tokens",
    {
      name,
      symbol,
      network: "Polygon Mumbai",
      type: tokenType,
      initialSupply,
      decimals: decimals || DEFAULT_DECIMALS,
      address: contractAddress,
      mintable,
      burnable,
      createdAt: serverTimestamp(),
    }
  )
}

const getNetworkLibrary = (network: string) => {
  switch (network) {
    case "Polygon Mumbai":
      return {
        getSigner: getEthereumSigner,
        factoryContract: createPolygonToken,
      }

    default:
      return {
        getSigner: getEthereumSigner,
        factoryContract: createPolygonToken,
      }
  }
}

export { getNetworkLibrary }

interface Options {
  from: string
  gasPrice: string
  gas: number
}
